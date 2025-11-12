FROM jekyll/jekyll:4.2.0
LABEL MAINTAINER="Arif Nurwidyantoro"

# Install ImageMagick and other dependencies
RUN apk add --no-cache \
        imagemagick \
        imagemagick-dev \
        libxml2-dev \
        shadow \
        autoconf \
        g++ \
        make

WORKDIR /srv/jekyll

# Copy Gemfile and install dependencies
COPY Gemfile /srv/jekyll/
RUN bundle install

EXPOSE 4000

CMD ["jekyll", "serve", "--host", "0.0.0.0", "--port", "4000"]
