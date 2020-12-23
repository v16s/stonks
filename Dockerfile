FROM node:lts as base

WORKDIR /app

COPY .env ./
COPY package.json ./
RUN yarn install

COPY . .

RUN rm -rf lib
RUN yarn build

COPY lib lib
COPY node_modules node_modules

CMD ["node", "lib/index"]
