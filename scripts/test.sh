#!/bin/bash

branch_name="$bamboo_repository_git_branch"
app_name="$bamboo_planRepository_name"
# replace / with - i.e. feature/branch_name to feature-branch-name
santized_branch_name="${branch_name/\//-}";
output_file_name="$santized_branch_name.md"
lint_output_file_name="$santized_branch_name-lint.md"
cp_output_file_name="$santized_branch_name-cp.md"

# Send Test Pending to Github
curl -H "Authorization: token 2fa70040e61b6d5faaf08f9c382587b707711051" --request POST --data '{"state": "pending", "description": "Build is running", "target_url": "", "context": "Tests"}' https://api.github.com/repos/GenomeOne/$app_name/statuses/${bamboo_repository_revision_number} > /dev/null

# Send Lint Pending to Github
curl -H "Authorization: token 2fa70040e61b6d5faaf08f9c382587b707711051" --request POST --data '{"state": "pending", "description": "Linter is running", "target_url": "", "context": "Linter"}' https://api.github.com/repos/GenomeOne/$app_name/statuses/${bamboo_repository_revision_number} > /dev/null

# Send Copy paste detector pending to github
curl -H "Authorization: token 2fa70040e61b6d5faaf08f9c382587b707711051" --request POST --data '{"state": "pending", "description": "Duplicate Code detector is running", "target_url": "", "context": "Duplicate Code Detector"}' https://api.github.com/repos/GenomeOne/$app_name/statuses/${bamboo_repository_revision_number} > /dev/null


repo_name="$app_name.wiki"
repo_url="https://2fa70040e61b6d5faaf08f9c382587b707711051@github.com/GenomeOne/$app_name.wiki.git"

# Output Test results
CI=true npm run test > $output_file_name 2>&1

# Output Lint results
node node_modules/eslint/bin/eslint.js --config node_modules/eslint-config-react-app/index.js src/ > $lint_output_file_name

# Output Copy Paste Detector Results
node_modules/jsinspect/bin/jsinspect -t 40 src/ > $cp_output_file_name

# Clean up repo locally
rm -rf $repo_name

# Create a new repo
git clone $repo_url

# mv to wiku repo in order to clean up all at once
mv $output_file_name $repo_name/
mv $lint_output_file_name $repo_name/
mv $cp_output_file_name $repo_name/

# Appending building SMS to wiki
cd $repo_name

echo $'\r' >> $output_file_name
echo $'\r' >> $lint_output_file_name
echo $'\r' >> $cp_output_file_name

# Add all untracked files
git add -A
# Commit and push to the repo
git commit -am 'Started buiding'

git push origin master

# Send Test Results
if grep -q "FAIL" $output_file_name
then
  echo "Send Build starting to Github: Request"
  curl -H "Authorization: token 2fa70040e61b6d5faaf08f9c382587b707711051" --request POST --data "{\"state\": \"failure\", \"description\": \"Tests failed. Click Details to check them out.\", \"target_url\": \"https://github.com/GenomeOne/$app_name/wiki/$output_file_name\", \"context\": \"Tests\"}" https://api.github.com/repos/GenomeOne/$app_name/statuses/${bamboo_repository_revision_number} > /dev/null
  echo "Send Build starting to Github: Success"
else
  echo "Send Build starting to Github: Request"
  curl -H "Authorization: token 2fa70040e61b6d5faaf08f9c382587b707711051" --request POST --data "{\"state\": \"success\", \"description\": \"Tests passed! Hooray!\", \"target_url\": \"https://github.com/GenomeOne/$app_name/wiki/$output_file_name\", \"context\": \"Tests\"}" https://api.github.com/repos/GenomeOne/$app_name/statuses/${bamboo_repository_revision_number} > /dev/null
  echo "Send Build starting to Github: Success"
fi

# Send Linter Results
if grep -q "✖" $lint_output_file_name
then
  echo "Send Build starting to Github: Request"
  curl -H "Authorization: token 2fa70040e61b6d5faaf08f9c382587b707711051" --request POST --data "{\"state\": \"failure\", \"description\": \"Found errors or warnings. Click Details to check them out.\", \"target_url\": \"https://github.com/GenomeOne/$app_name/wiki/$lint_output_file_name\", \"context\": \"Linter\"}" https://api.github.com/repos/GenomeOne/$app_name/statuses/${bamboo_repository_revision_number} > /dev/null
  echo "Send Build starting to Github: Success".
else
  echo "Send Build starting to Github: Request"
  curl -H "Authorization: token 2fa70040e61b6d5faaf08f9c382587b707711051" --request POST --data "{\"state\": \"success\", \"description\": \"No errors or warnings. YAY!\", \"target_url\": \"https://github.com/GenomeOne/$app_name/wiki/$lint_output_file_name\", \"context\": \"Linter\"}" https://api.github.com/repos/GenomeOne/$app_name/statuses/${bamboo_repository_revision_number} > /dev/null
  echo "Send Build starting to Github: Success"
fi

# Send the Copy paste detector results
echo "Send CP starting to Github: Request"
curl -H "Authorization: token 2fa70040e61b6d5faaf08f9c382587b707711051" --request POST --data "{\"state\": \"success\", \"description\": \"Duplicate Code Detected - Click Details to review.\", \"target_url\": \"https://github.com/GenomeOne/$app_name/wiki/$cp_output_file_name\", \"context\": \"Duplicate Code Detector\"}" https://api.github.com/repos/GenomeOne/$app_name/statuses/${bamboo_repository_revision_number} > /dev/null
echo "Send CP starting to Github: Success"
