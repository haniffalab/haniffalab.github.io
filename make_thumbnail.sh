#!/bin/bash

# e.g. ./make_thumbnail.sh /path/to/img /path/to/output

IMG=$1
OUTDIR=$2
SUFFIX=$3
BASENAME=$(basename "$IMG")
FILENAME="${BASENAME%.*}"
THUMBNAIL_FILE="${FILENAME}${SUFFIX}.jpg"
convert "$IMG" -auto-orient -thumbnail x210 "$THUMBNAIL_FILE"
cwebp -q 90 "$THUMBNAIL_FILE" -o "${OUTDIR}/${FILENAME}${SUFFIX}.webp"
rm "$THUMBNAIL_FILE"
