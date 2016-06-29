FROM node
EXPOSE 8080

ADD . /code
WORKDIR /code
RUN apt-get -yq update && \
    apt-get -yq install curl && \
    curl -L https://npmjs.org/install.sh | sh && \
    apt-get clean

RUN npm install -g webpack webpack-dev-server typings typescript && \
    npm install && \
    typings install
RUN npm run --max-old-space-size=8192 build:prod && \
    npm cache clear
CMD npm run server:prod
