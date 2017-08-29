#!/bin/bash
set -x

PART_OF_BRANCH_NAME=`echo "${bamboo_repository_git_branch}" | cut -d'/' -f2 | cut -d'-' -f1,2`
BRANCH_NAME=`echo "${bamboo_repository_git_branch}"`
app_name="$bamboo_planRepository_name"
clean_app_name=${app_name:4}


if [ "$PART_OF_BRANCH_NAME" == "develop" ] || [ "$PART_OF_BRANCH_NAME" == "uat" ] || [ "$PART_OF_BRANCH_NAME" == "master" ]; then
        sed -i 's#"homepage": "/demo/'$bamboo_planRepository_name'/'"$BRANCH_NAME"'"#"homepage": "/'$clean_app_name'"#g' package.json
        rm -rf build

        if [ "$PART_OF_BRANCH_NAME" == "uat" ]; then
            REACT_APP_GATRACKID=UA-81359825-2 REACT_APP_BASE_URL=/api/gw-messenger/v1 CI=true npm run build > build.txt 2>&1
        elif [ "$PART_OF_BRANCH_NAME" == "master" ]; then
            REACT_APP_GATRACKID=UA-81359825-3 REACT_APP_BASE_URL=/api/gw-messenger/v1 CI=true npm run build > build.txt 2>&1
        else
            REACT_APP_BASE_URL=/api/gw-$clean_app_name/v1 CI=true npm run build > build.txt 2>&1
        fi

        printf "FROM kccg.garvan.org.au:18082/nginx:latest\nADD build /usr/share/nginx/html" > Dockerfile

        echo "Creating Docker Image for Web Application" $bamboo_planRepository_name "with Tag:latest-"$PART_OF_BRANCH_NAME
        docker build --force-rm=true --tag=822459375388.dkr.ecr.ap-southeast-2.amazonaws.com/$bamboo_planRepository_name:latest-$PART_OF_BRANCH_NAME .
        docker rmi $(docker images -f "dangling=true" -q)
        aws ecr batch-delete-image --repository-name $bamboo_planRepository_name --image-ids imageTag=latest-$PART_OF_BRANCH_NAME
        eval `aws ecr get-login --region ap-southeast-2`
        docker push 822459375388.dkr.ecr.ap-southeast-2.amazonaws.com/$bamboo_planRepository_name:latest-$PART_OF_BRANCH_NAME

        rm Dockerfile
fi
