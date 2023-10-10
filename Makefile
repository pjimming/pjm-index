upload:
	npm run build
	git add .
	git commit -m "$(msg)"
	git push -f
	git subtree push --prefix=dist origin gh-pages
