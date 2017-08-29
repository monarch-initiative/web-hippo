#!/bin/bash
set -x

# Clone the branch
echo "Cloning Branch"
git clone -b $bamboo_planRepository_branchName --single-branch $bamboo_planRepository_repositoryUrl .
echo "Cloning Branch Done"
# End Clone the branch
