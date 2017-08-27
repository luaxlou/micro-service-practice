FROM node:alpine

WORKDIR /usr/src/app

COPY package.json .

RUN npm install

copy . .

EXPOSE 8080