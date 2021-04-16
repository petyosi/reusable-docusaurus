#!/bin/sh

# capture the current execution path
export SDK_PATH=$(pwd) 

# move execution to the package directory
cd $(dirname $(dirname $0)"/"$(readlink $0))
npm run start

