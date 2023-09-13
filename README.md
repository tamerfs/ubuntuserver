# ubuntuserver
## testando o git num linux server desktop remoto com SSH 
### com docker rodando


interligando o VSCODE num notebook windows

proximos passos :
-> adicionar um container mysql
-> adicionar a API node
-> interligar via rede Nodes e Pods
-> adicionar outros usuarios

```
docker run -d -v $(pwd):/home/node/app -p9001:9001 --link mysql-container-instance --rm --name node-container-instance node-image
```