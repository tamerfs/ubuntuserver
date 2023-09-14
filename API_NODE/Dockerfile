FROM node:10-alpine
# Create app directory
USER node
RUN mkdir /home/node/code
WORKDIR /home/node/app
COPY --chown=node:node . .
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
