
FROM ubuntu:20.04

RUN apt-get update && apt-get install ngrok
RUN npm install

CMD "ngrok http --domain=lion-natural-factually.ngrok-free.app 9001 --basic-auth 'tamer:dbmysqlapi'"


