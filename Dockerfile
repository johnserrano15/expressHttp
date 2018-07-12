FROM node:8.11.3
LABEL maintainer="web@johnserrano.co" \
      description="Ejemplode nodejs con express"

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install
# If you are building your code for production
# RUN npm install --only=production

# Bundle app source
COPY . .

EXPOSE 8080

# CMD [ "npm", "start" ]
# CMD [ "npm", "run", "dev" ]
CMD [ "nodemon", "-L", "server.js" ]