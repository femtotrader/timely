#!/bin/bash

if [[ `uname` == "Darwin" ]]; then
    THIS_SCRIPT=`python -c 'import os,sys; print os.path.realpath(sys.argv[1])' $0`
else
    THIS_SCRIPT=`readlink -f $0`
fi

THIS_DIR="${THIS_SCRIPT%/*}"
BASE_DIR=$(cd $THIS_DIR/.. && pwd)
BIN_DIR=${BASE_DIR}/bin

. ${BIN_DIR}/timely-balancer-env.sh

for i in $(seq 1 $NUM_INSTANCES); do
    echo ${BIN_DIR}/timely-balancer.sh $i
    ${BIN_DIR}/timely-balancer.sh $i
done
