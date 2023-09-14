#FROM node:10-alpine
#FROM node:10-slim
#FROM node:12-stretch
FROM node:16
# Create app directory
USER node
RUN echo "$PWD"
RUN pwd
RUN mkdir /home/node/code
RUN echo "$PWD"
RUN pwd
WORKDIR /home/node/app
RUN echo "$PWD"
RUN pwd
COPY --chown=node:node ../API_NODE .
RUN echo "$PWD"
RUN pwd
RUN ls -al
#C:\WorkSpace\05_VM e Containers\ubuntuserver\API_NODE\Dockerfile
# Install app dependencies
# A wildcard is used to ensure both package.json AND package-lock.json are copied
# where available (npm@5+)
# here 8000 is the default value if no value is passed during runtime. 
ARG PORT_ARG=9001
ENV PORT=$PORT_ARG
RUN echo "PORT is: $PORT"
RUN npm install
# If you are building your code for production
# RUN npm ci --omit=dev
# Bundle app source
EXPOSE $PORT
CMD ["npm","start"]
