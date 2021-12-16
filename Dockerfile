# pull official base image
FROM node:16.13.1-alpine3.14

# set working directory
WORKDIR /app

# add `/app/node_modules/.bin` to $PATH
ENV PATH /app/node_modules/.bin:$PATH

# install app dependencies
COPY package.json ./
RUN npm install --only=production && npm install react-scripts serve -g

# add app
COPY . ./

RUN npm run build

EXPOSE 8080

CMD ["serve","-p","8080","build/"]