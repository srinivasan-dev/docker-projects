FROM node:alpine

WORKDIR /var/www/html/node-mongo-multi-docker

COPY ./package.json ./

RUN npm install

COPY . .

CMD [ "npm", "start" ]
