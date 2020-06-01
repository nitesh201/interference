for i in $(find . -maxdepth 2 -mindepth 2); do
	out="compressed/${i%.jpg}.jpg"
	mkdir -p "${out%/*}"
	convert "$i" -quality 50% -resize 50% "$out"
	echo "$out"
done
