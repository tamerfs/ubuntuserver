# ubuntuserver com 3 containers BACK / API / FRONT

-> interligando o VSCODE(win10) - clonar repositorio e autenticar com uma chave ssh
-> interligar o repositorio do git no serviodr(linux ubuntu) e autenticar com uma chave shae256
-> adicionar um container mysql
-> adicionar a API node
proximos passos :
-> interligar via rede Nodes e Pods
-> adicionar o PHP para consumo
-> adicionar outros usuarios

ultimo comando usado para subir o mysql com o node lincando na mesma rede:

*git pull -> serverubuntu ( /home/tamer/dockerserver ou ~/dockerserver )*

_____________


## imagens docker 

CONTAINER ID  IMAGE             COMMAND                CREATED       STATUS              PORTS                             NAMES
947888d5bf18  ubuntu:20.04      "/bin/bash"            46 hours ago  Exited 32 min ago                                     ubuntu-ngrok
dac181a97b7b  lts-16/node-image "docker-entrypoint.s…" 2 days ago    Up 21 minutes       0.0.0.0:4040->4040/tcp, 9001/tcp  node-prd
780f8f224e45  mysql-image       "docker-entrypoint.s…" 2 days ago    Up 29 minutes       0.0.0.0:3306->3306/tcp, 33060/tcp mysql-prd
604850ed0220  lts-16/node-image "docker-entrypoint.s…" 4 days ago    Up 20 minutes       0.0.0.0:9001->9001/tcp            node-dev-hml
f32ee3731756  mysql-image       "docker-entrypoint.s…" 4 days ago    Up 29 minutes       3306/tcp, 33060/tcp               mysql-dev-hml
