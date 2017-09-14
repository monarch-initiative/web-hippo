#!/bin/bash
set -x

branch_name="$bamboo_planRepository_branch"
app_name="$bamboo_planRepository_name"
clean_app_name=${app_name:4}

# Build for sandbox
rm -rf build
sed -i 's#"homepage": "/'$clean_app_name'"#"homepage": "/demo/'$bamboo_planRepository_name'/'"$branch_name"'"#g' package.json
cat package.json

REACT_APP_BASE_URL=/api/web-server CI=true npm run build
mkdir -p $branch_name
cp -R build/* $branch_name

# SSH to sandbox
ssh -i ~/.ssh/sandbox.pem ec2-user@13.55.2.207 /bin/bash <<EOF
mkdir -p "/mnt/demo/$app_name/$branch_name"
exit
EOF

# Copy the files over
scp -i ~/.ssh/sandbox.pem -r $branch_name/. ec2-user@13.55.2.207:/mnt/demo/$app_name/$branch_name/
