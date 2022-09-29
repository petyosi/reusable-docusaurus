#!/bin/sh

# capture the current execution path
export CONTENT_PATH=$(pwd) 

# move execution to the package directory
cd $(dirname $(dirname $0)"/"$(readlink $0))
COMMAND=${1:-start}
npm run $COMMAND 

if [ $COMMAND == "build" ]; then
  mv build $CONTENT_PATH/
fi

