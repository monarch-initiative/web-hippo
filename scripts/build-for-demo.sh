#!/bin/bash
set -x

branch_name="$bamboo_planRepository_branch"
app_name="$bamboo_planRepository_name"
clean_app_name=${app_name:4}

# Build for sandbox
rm -rf build

REACT_APP_BASE_URL=/api/web-server/publications CI=true npm run build
mkdir -p $branch_name
cp -R build/* $branch_name

# SSH to sandbox
ssh 35.189.35.255 /bin/bash <<EOF
mkdir -p "/var/nfs/demo/$app_name/$branch_name"
exit
EOF

# Copy the files over
scp -r $branch_name/. 35.189.35.255:/var/nfs/demo/$app_name/$branch_name/

# UAT!
# Build for sandbox, but pointing to UAT
rm -rf build

REACT_APP_BASE_URL=https://phenomics-dev.genome.one/search-engine  CI=true npm run build > build.txt 2>&1
mkdir -p $branch_name
cp -R build/* $branch_name

# SSH to sandbox
echo "Creating folder on Sandbox - /var/nfs/demo/uat/$app_name/$branch_name"
ssh 35.189.35.255 /bin/bash <<EOF
mkdir -p "/var/nfs/demo/uat/$app_name/$branch_name"
exit
EOF

# Copy the files over
scp  -r $branch_name/. 35.189.35.255:/var/nfs/demo/uat/$app_name/$branch_name/
