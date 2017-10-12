FROM node:alpine

RUN npm install pm2 -g
WORKDIR /usr/src/app

CMD ["pm2-docker","process.yml"]