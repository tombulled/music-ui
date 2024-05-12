FROM node:20-alpine AS build
WORKDIR /build
COPY package.json package.json
COPY package-lock.json package-lock.json
COPY tsconfig.json tsconfig.json
RUN npm ci
COPY public/ public
COPY src/ src
RUN npm run build

FROM bitnami/nginx:1.25.5
COPY --from=build /build/build/ /app
