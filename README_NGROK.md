____________________________
[ngronk - tunnel](https://www.tecmint.com/test-local-websites-on-internet-using-ngrok/)
```
ngrok http --domain=great-truly-terrier.ngrok-free.app 80
ngrok http 8000 --basic-auth 'ngrok:issecure'
docker run -it -e NGROK_AUTHTOKEN=2VPvMv2eXle1XHe8CInEKnVEGoE_4R4AXxVfwR1TMpUWfD6TE ngrok/ngrok http 9001 --domain=resolved-duck-proper.ngrok-free.app --basic-auth 'tamer:apimysql'

ngrok config add-authtoken 2VPvMv2eXle1XHe8CInEKnVEGoE_4R4AXxVfwR1TMpUWfD6TE

ngrok http --domain=lion-natural-factually.ngrok-free.app 9001 --basic-auth 'tamer:dbmysqlapi'
ngrok http --domain=humble-sculpin-positively.ngrok-free.app 9001 --basic-auth 'tamer:dbmysqlapi'
ngrok http --domain=kingfish-bold-loudly.ngrok-free.app 9001 --basic-auth 'tamer:dbmysqlapi'
ngrok http --domain=hornet-workable-goblin.ngrok-free.app 9001 --basic-auth 'tamer:dbmysqlapi'


INSTALAR NGROK NUM CONTAINER =>
curl -s https://ngrok-agent.s3.amazonaws.com/ngrok.asc | tee /etc/apt/trusted.gpg.d/ngrok.asc >/dev/null && echo "deb https://ngrok-agent.s3.amazonaws.com buster main" | tee /etc/apt/sources.list.d/ngrok.list && apt update && apt install ngrok
