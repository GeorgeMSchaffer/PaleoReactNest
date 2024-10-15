#!/bin/bash

# Check if at least one argument is provided
if [ "$#" -lt 1 ]; then
  echo "Usage: $0 INTERVAL_ID [INTERVAL_ID ...]"
  exit 1
fi

# Loop through each argument
for INTERVAL_ID in "$@"
do
  # Construct the URL
  URL="https://paleobiodb.org/data1.2/occs/list.json?&interval_id=${INTERVAL_ID}&vocab=pbdb&show=attr,class,phylo,genus,subgenus,ident,img,plant,abund,ecospace,coords,env,geo,paleoloc,loc,coll,taphonomy,timecompare,strat,time"
  
  # Download the JSON file and save it with the appropriate name
  curl -o "./PROJECT_DATA/occurrences-${INTERVAL_ID}.json" "$URL"
  
  # Check if the download was successful
  if [ $? -eq 0 ]; then
    echo "Downloaded occurrences-${INTERVAL_ID}.json successfully."
  else
    echo "Failed to download occurrences-${INTERVAL_ID}.json."
  fi
done