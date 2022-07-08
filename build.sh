#!/bin/bash

set -o errexit
set -o verbose

ng build

# copy dist/aws-skills-mapping-app to SERVER Folder