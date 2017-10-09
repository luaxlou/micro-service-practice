FROM node:alpine

RUN npm install pm2 -g
WORKDIR /usr/src/app

EXPOSE 8080

CMD ["pm2-docker","start","process.yml"]