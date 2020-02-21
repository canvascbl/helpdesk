FROM ruby:2.6-alpine
COPY . /helpdesk
RUN apk add build-base
WORKDIR /helpdesk
RUN gem install bundler && make install
EXPOSE 4000
ENTRYPOINT ["make", "start"]
