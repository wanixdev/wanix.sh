.PHONY: build deploy

build: public

public:
	hugo

deploy: public
	git switch gh-pages
	find . -mindepth 1 -maxdepth 1 ! -name public ! -name .git -exec rm -rf {} +
	mv public/* .
	rm -rf public
	git add .
	git commit -m "deploy"
	git push origin gh-pages
	git switch main

