FROM node:6.9.1

# install watchman
RUN set -ex \
  && export WATCHMAN_VERSION=4.7.0 \
  && curl -SL "https://github.com/facebook/watchman/archive/v${WATCHMAN_VERSION}.tar.gz" | tar -xz -C /tmp/ \
  && cd /tmp/watchman-${WATCHMAN_VERSION} \
  && ./autogen.sh \
  && ./configure \
  && apt-get update && apt-get install -y --no-install-recommends python-dev \
  && make \
  && make install \
  && apt-get purge -y --auto-remove python-dev \
  && rm -rf /var/lib/apt/lists/* \
  && rm -rf /tmp/*

#RUN sysctl -w fs.inotify.max_user_watches=524288
#RUN echo "fs.inotify.max_user_watches=1048576" >> /etc/sysctl.conf && sysctl -p /etc/sysctl.conf

RUN useradd --user-group --create-home --shell /bin/false ember && \
    apt-get clean

ENV HOME=/home/breweryup

COPY package.json ./package.json $HOME/src/

COPY . $HOME/src

WORKDIR $HOME/src

RUN \
	npm install -g ember-cli@2.11.0 --silent --progress=false --production &&\
	npm install -g bower@1.8.0 --silent --progress=false --production &&\
	npm install -g yarn@0.19.1 --silent --progress=false --production &&\
	npm install -g phantomjs@2.1.7 --silent --progress=false --production

RUN yarn install && bower install --allow-root

RUN chmod 0700 ~/.npm
RUN chmod 0700 ~/.config
RUN chown -R ember:ember $HOME $HOME/* /usr/local/
USER ember

# ember server on port 4200
# livereload server on port 49153
EXPOSE 4200 49153

# run ember server on container start
CMD ["ember", "server"]
