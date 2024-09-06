#!/bin/bash

# e.g. ./make_img.sh /path/to/img /path/to/output -full 

IMG=$1
OUTDIR=$2
SUFFIX=$3
BASENAME=$(basename "$IMG")
FILENAME="${BASENAME%.*}"
cwebp -q 80 "$IMG" -o "${OUTDIR}/${FILENAME}${SUFFIX}.webp"