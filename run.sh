#!/bin/bash

. /vpsbash site

. "$(vpsSiteGetEnv "$(basename "$(cd "$(dirname "$(readlink -e "${BASH_SOURCE[0]}")")" && pwd)")")"

declare -i dev=0
declare -i front=0
declare -i back=0

for arg in "$@"; do
    case "${arg}" in
        dev)   (( dev=1 )) ;;
        front) (( front=1 )) ;;
        back)  (( back=1 )) ;;
    esac
done
unset arg

if (( front )); then
    echo 'TODO'
fi

if (( back )); then
    echo 'TODO'
fi
