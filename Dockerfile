FROM node:17.8.0-alpine3.15

WORKDIR /app

COPY . .

RUN npm install
RUN npm i redis express response-time nodemon

CMD ["npm", "start"]