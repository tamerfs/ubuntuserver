#FROM node:10-alpine
FROM node:12-stretch
# Create app directory
USER node
RUN mkdir /home/node/code
RUN pwd
WORKDIR /home/node/app
RUN pwd
COPY --chown=node:node .. .
RUN ls -al
#C:\WorkSpace\05_VM e Containers\ubuntuserver\API_NODE\Dockerfile
# Install app dependencies
# A wildcard is used to ensure both package.json AND package-lock.json are copied
# where available (npm@5+)
# here 8000 is the default value if no value is passed during runtime. 
ARG PORT_ARG=9001
ENV PORT=$PORT_ARG
RUN npm install
# If you are building your code for production
# RUN npm ci --omit=dev
# Bundle app source
EXPOSE $PORT
CMD ["npm","start"]
