#!/bin/bash
set -x

branch_name="$bamboo_planRepository_branch"
app_name="$bamboo_planRepository_name"
clean_app_name=${app_name:4}

# Build for sandbox
rm -rf build

REACT_APP_BASE_URL=/api/web-server REACT_APP_PASSPORT_URL=/demo/web-passport/develop CI=true npm run build
mkdir -p $branch_name
cp -R build/* $branch_name

# SSH to sandbox
ssh -i ~/.ssh/sandbox.pem ec2-user@13.55.2.207 /bin/bash <<EOF
mkdir -p "/mnt/demo/$app_name/$branch_name"
exit
EOF

# Copy the files over
scp -i ~/.ssh/sandbox.pem -r $branch_name/. ec2-user@13.55.2.207:/mnt/demo/$app_name/$branch_name/

# UAT!
# Build for sandbox, but pointing to UAT
rm -rf build

REACT_APP_BASE_URL=https://uat.genome.one/api/gw-$clean_app_name/v1 REACT_APP_PASSPORT_URL=/demo/uat/web-passport/develop CI=true npm run build > build.txt 2>&1
mkdir -p $branch_name
cp -R build/* $branch_name

# SSH to sandbox
echo "Creating folder on Sandbox - /mnt/demo/uat/$app_name/$branch_name"
ssh -i ~/.ssh/sandbox.pem ec2-user@13.55.2.207 /bin/bash <<EOF
mkdir -p "/mnt/demo/uat/$app_name/$branch_name"
exit
EOF

# Copy the files over
scp -i ~/.ssh/sandbox.pem -r $branch_name/. ec2-user@13.55.2.207:/mnt/demo/uat/$app_name/$branch_name/