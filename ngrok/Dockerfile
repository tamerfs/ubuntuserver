FROM alpine:3.16
RUN apk upgrade \
  && apk update \
  && apk add wget \
  && wget -c https://bin.equinox.io/c/4VmDzA7iaHb/ngrok-stable-linux-amd64.zip \
  && unzip ngrok-stable-linux-amd64.zip \
  && sudo snap install ngrok
CMD  ["ngrok config add-authtoken 2VPvMv2eXle1XHe8CInEKnVEGoE_4R4AXxVfwR1TMpUWfD6TE"]
ENTRYPOINT ["ngrok http 9001"]