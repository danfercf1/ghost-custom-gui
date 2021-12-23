# build environment
FROM node:16.13.1-alpine3.14 as build
ENV NODE_ENV production
WORKDIR /app
ENV PATH /app/node_modules/.bin:$PATH
COPY package.json .
COPY yarn.lock .
RUN yarn install --production
# Copy app files
ADD src /app/src/
ADD public /app/public/
# Build the app
RUN yarn build

# production environment
FROM nginx:1.15.12-alpine
COPY ./docker/nginx/nginx.conf /etc/nginx/conf.d/default.conf
COPY --from=build /app/build /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]