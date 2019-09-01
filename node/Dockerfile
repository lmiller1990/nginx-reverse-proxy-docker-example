FROM node:12-buster-slim

RUN mkdir /app
WORKDIR /app
COPY . /app
RUN npm install
CMD ["node", "index.js"]
