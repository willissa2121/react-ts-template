FROM node:14

WORKDIR /usr/src/app

ENV PATH /app/node_modules/.bin:$PATH

COPY package.json ./
RUN npm install --silent

COPY . ./

EXPOSE 5000

CMD ["node", "server.js"]