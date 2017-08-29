#!/bin/bash
set -x

# Get the branch
#./repo.sh

# NPM Install
./scripts/install.sh

# Tests
./scripts/test.sh

# Demo
./scripts/build-for-demo.sh

# ECR
./scripts/docker.sh
