#!/bin/bash
set -x

# NPM Install
./scripts/install.sh

# Tests
./scripts/test.sh

# Demo
./scripts/build-for-demo.sh


