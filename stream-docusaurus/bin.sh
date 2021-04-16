#!/bin/bash

DOCUSAURUS_PATH=$(dirname $(dirname $BASH_SOURCE)"/"$(readlink $BASH_SOURCE))
SDK_PATH=$(pwd) yarn --cwd $DOCUSAURUS_PATH start

