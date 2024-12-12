FROM node:lts as base

WORKDIR /api
COPY . .

EXPOSE 3000 3000

FROM base as dev
RUN npm install
CMD npm run dev

FROM base as production
RUN npm install --omit=dev
ENV NODE_ENV=production

FROM node:lts-slim as release
WORKDIR /api
COPY --from=production /api /api/.
CMD npm start