install:
	bundle install

build:
	bundle exec jekyll build

build/docker:
	docker build -t canvascbl/helpdesk .

start:
	bundle exec jekyll serve

start/docker:
	docker run \
		--mount type=bind,source="`pwd`",target=/helpdesk \
		-p 4000:4000 \
		-it \
		canvascbl/helpdesk