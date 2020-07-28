FROM node:alpine

WORKDIR /var/www/html/docker-node

# copy ./(source directory) ./(dest container working directory i.e /var/www/html/docker-node)
COPY ./package.json ./

RUN npm install

COPY ./ ./


CMD [ "npm", "start" ]