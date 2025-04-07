# build

FROM node:20-alpine AS build

WORKDIR /slobodan

ENV NODE_ENV=production

COPY package.json .

RUN npm i

COPY . .

RUN npm run build

# production

FROM node:20-alpine AS prod

ENV NODE_ENV=production

ENV REACT_APP_ENV=prod

RUN npm i -g pm2

COPY --from=build /slobodan/build ./build

COPY --from=build /slobodan/ecosystem.config.js ./ecosystem.config.js

CMD ["pm2-runtime", "start", "ecosystem.config.js"]