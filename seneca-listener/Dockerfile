FROM node:alpine

RUN npm install pm2 -g
WORKDIR /usr/src/app
COPY package.json .

RUN npm install

COPY . .

EXPOSE 8080

CMD ["pm2-docker","process.yml"]