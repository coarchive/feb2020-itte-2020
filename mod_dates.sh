for f in $(find . -type f)
do
  printf "%30s -- %s\n" "\"$f\"" "$(date -r $f)"
done
