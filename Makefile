.PHONY: build deploy

build:
	hugo

deploy:
	git switch public
	git checkout main -- public/
	git mv public/* .
	git commit -m "deploy"
	git push origin public
	git switch main