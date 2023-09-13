FROM node:10-alpine
# Create app directory
RUN mkdir -p /home/tamer/dockerserver/API_NODE/node_modules && chown -R node:node /home/tamer/dockerserver/API_NODE
WORKDIR /home/tamer/dockerserver/API_NODE
# Install app dependencies
# A wildcard is used to ensure both package.json AND package-lock.json are copied
# where available (npm@5+)
COPY package*.json ./
USER node
RUN npm install
# If you are building your code for production
# RUN npm ci --omit=dev
# Bundle app source
COPY --chown=node:node . .
EXPOSE 8080
CMD [ "node", "server.js", "index.js"]
