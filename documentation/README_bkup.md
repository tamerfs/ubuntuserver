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

### Comandos gerais no docker

```bash
docker image ls    =>     lista as imagens do docker baixadas no local disponíveis para uso
docker ps  =>  mostra os processos ou containes ativos.
docker rmi {idImagem}  =>  remover imagens pelo ID ( -f para forçar )  
docker inspect {nome do container} =>  para ver informações de um container 
docker ps -a => ver todos os containers mesmo parados
docker logs 9e1a64dfc970 {container ID}
docker ps -a -q => delete all stopped containers with docker rm 
docker cp index.js instance-node-16:/home/node/app/src/index.js
docker update --restart=always my-container {opções => no / on-failure / unless-stopped / always}

```

### ***build*** [docs](https://docs.docker.com/engine/reference/commandline/build/)

#### Criar ou Baixar uma imagem padrão na nuvem com um Dockerfile

```bash

docker build -t {nome-image} -f {diretorio-do-dockerfile}/Dockerfile .
docker build -t {sua_tag}/{nome-image} -f {diretorio-do-dockerfile}/Dockerfile .

docker build -t {imagem_a_baixar} --build-{variavel}={valor}  -f {diretorio-do-dockerfile}/Dockerfile .
docker build -t {imagem_a_baixar} --build-arg PORT_ARG=8081  -f {diretorio-do-dockerfile}/Dockerfile .

docker build -t mysql-image -f ./db/Dockerfile .
docker build -t node-image -f ./API_NODE/Dockerfile .
docker build -t ubuntu -f ./ngrok/Dockerfile .

docker build -t {imagem_a_baixar} --no-cache --progress=plain -f {diretorio-do-dockerfile}/Dockerfile .

 -f -> folder file / endereço do dockerfile
 -t -> taguear a imagem a subir
Dockerfile . -> parametros que podemos usar na hora da criação da imagem

```

* diretorio arquivo da API node : ~/dockerserver/API_NODE/Dockerfile
* diretorio arquivo do db mySQL : ~/dockerserver/db/Dockerfile

### ***run*** [docs](https://docs.docker.com/engine/reference/commandline/run/)

#### Subir um container a partir de uma imagem baixada

```bash
docker run -d --rm --name {nome-do-meu-container} {nome-da-minha-image-salva}

 -d -> daemon ou detach se nao vai prender o terminal
 --rm ->  remove se ja tiver um de pé
 --name  -> nome do novo container a subir
```

#### Subir um container + um volme como host da imagem do container para salvar os dados da máquina

```bash
docker run -d -v $(pwd)/data:/var/lib/{meu-programa} --rm --name meu-container-instancia minha-imagem-baixada 

docker run -d -v $(pwd)/db:$(pwd)/persistent_disk/mysql --rm --name mysql-container-instancia mysql-image 
docker run -d -v $(pwd)/db:$(pwd)/persistent_disk/mysql --rm -p 0.0.0.0:3306:3306 --name mysql-exposed mysql-image 
docker run -d -v $(pwd)/db:$(pwd)/persistent_disk/mysql --restart=always -p 0.0.0.0:3306:3306 --name mysql-exposed mysql-image 

docker run -d -v $(pwd)/API_NODE:$(pwd)/persistent_disk/node -p 0.0.0.0:9001:9001 --link instance-mysql --rm --name instance-node-alpine node-image
docker run -d -v $(pwd)/API_NODE:$(pwd)/persistent_disk/node -p 0.0.0.0:4040:4040 --link mysql-prd --restart=always --name instance-node node-16/node-image

docker run -it -v $(pwd)/ngrok:/$(pwd)/persistent_disk/ngrok --restart=always --name instancia-linux ubuntu 
docker run -it --name myalpine -d alpine

docker run -i -e  NGROK_AUTHTOKEN=2VPvMv2eXle1XHe8CInEKnVEGoE_4R4AXxVfwR1TMpUWfD6TE ngrok/ngrok http 0.0.0.0:9001:9001 --domain=resolved-duck-proper.ngrok-free.app --basic-auth 'tamer:mysqldbapi'
docker run -it -e NGROK_AUTHTOKEN=2VPvMv2eXle1XHe8CInEKnVEGoE_4R4AXxVfwR1TMpUWfD6TE ngrok/ngrok http 0.0.0.0:4040 --domain=lion-natural-factually.ngrok-free.app
docker run -it -e NGROK_AUTHTOKEN=2VPvMv2eXle1XHe8CInEKnVEGoE_4R4AXxVfwR1TMpUWfD6TE ngrok/ngrok tunnel --label edge=edghts_2VUyMkTZa8D0cM6Bivdb4HiUZzA http://localhost:80


 -d -> daemon ou detach, para executar mas desacoplado deixando o terminal livre

 -p -> porta do link entre os dois --publish
 -t -> Aloca um pseudo TTY 
 -i -> Keep STDIN open even if not attached (interactive)

 funcionamento => diretório/da/imagem/atual: diretório/do/volume
 --link -> relacionar um conteiner no outro (Add link to another container)
 --rm ->  remove se ja tiver um de pé
 --name  -> nome do novo container a subir
 --init -> sinalizador para indicar que um processo init deve ser usado como o PID 1 no contêiner.
 --restart=always -> para coocar um container para rodar mesmo quando quebrar
$(pwd) -> print working directory/ coloca o diretorio atual no comando como uma variavel


```

### ***exec*** [docs](https://docs.docker.com/engine/reference/commandline/exec/)

#### Executar arquivos dentro de uma container

```bash
docker exec -i {nome-do-meu-container} {meu-programa} {comandos utilizados}

docker exec -i instance-mysql mysql -uroot -pdatabasesql < db/initial_script_database.sql

nome-do-meu-container -> nome do container que vamos utilizar como mysql-container
meu-programa -> será o programa que vamos utilizar como por exemplo o mysql
 -u  -> usuário
 -p  -> senha de acesso ao sql
 -i  -> comando no modo interativo -> processo como shell executar o processo até que tudo do como script.sql seja executado
 <  -> seta para dizer que vamos executar tal arquivo no shell com o -i
```

#### Executar comandos dentro de uma container

```bash
docker exec -it {meu-container} /bin/bash

docker exec -it mysql-container /bin/bash

docker exec -it --user root myalpine /bin/sh

meu-container -> container rodando que vamos acessar
bin/bash -> abre na linha para usar o bash/prompt para comandos
```

### ***bin/bash***

##### Exemplo do uso do terminal do container

```bash
bash# mysql -uroot -pdatabasesql
mysql> USE {banco de dados} databasesql;
mysql> SELECT * FROM {nome da tabela criada};
```

#### Exemplo usando npm e node no bash

```bash
instal npm -y
npm install --save-dev nodemon (manter a aplicação sempre rodando)
npm install --save express mysql
```
___________________________
outros comandos como de permições

```
sudo aa-remove-unknown {limpa o apparmor do linux que bloqueia as ações que desligam os dockers criados}
sudo apparmor_parser -r /etc/apparmor.d/*snap-confine*
sudo apparmor_parser -r /var/lib/snapd/apparmor/profiles/snap-confine*
```
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


sudo systemctl enable --now snapd.socket
 curl -s https://ngrok-agent.s3.amazonaws.com/ngrok.asc | tee /etc/apt/trusted.gpg.d/ngrok.asc >/dev/null && echo "deb https://ngrok-agent.s3.amazonaws.com buster main" | tee /etc/apt/sources.list.d/ngrok.list && apt update && apt install ngrok

```
[stackoverflow - connection refused on docker container](https://stackoverflow.com/questions/36813690/connection-refused-on-docker-container) <br>
[superuser - connnect to linux using putty over the internet](https://superuser.com/questions/830568/connnect-to-linux-from-windows-using-putty-over-the-internet)<br>
[hostinger - tutorial docker](https://www.hostinger.com.br/tutoriais/install-docker-ubuntu)<br>
[tutorial docker](https://codenotary.com/blog/extremely-useful-docker-commands#:~:text=docker%20stop%20mycontainer%20stops%20one,q%20stops%20all%20running%20containers.)<br>
[docker run -d -net=host {imagem}](https://linuxhint.com/what-does-net-host-option-in-docker-compose-really-do/#:~:text=The%20%E2%80%9C%E2%80%93net%3Dhost%E2%80%9D%20option%20is%20utilized%20to%20execute,option%20%E2%80%9D%20command.)<br>
[docker logs](https://sematext.com/blog/docker-logs-location/)<br>
[journalctl -f](https://www.digitalocean.com/community/tutorials/how-to-use-journalctl-to-view-and-manipulate-systemd-logs-pt)<br>
[Docker and Node best practices](https://github.com/nodejs/docker-node/blob/main/docs/BestPractices.md)<br>
[Digital ocean and Node](https://www.digitalocean.com/community/tutorials/how-to-build-a-node-js-application-with-docker)<br>
[Docker docs env e outros](https://docs.docker.com/engine/reference/builder/#cmd)<br>
[networ docker](https://docs.docker.com/network/)<br>
[multi-stage uilds](https://docs.docker.com/build/building/multi-stage/)<br>
[env replacement](https://docs.docker.com/engine/reference/builder/#environment-replacement)<br>
[linux alpine](https://github.com/alpinelinux/docker-alpine)<br>
[alpine run and exec](https://linux.how2shout.com/how-to-create-alpine-container-in-docker/)<br>
[uuid in mysql server](https://www.mysqltutorial.org/mysql-uuid/)<br>
[encrypt mysql server](https://www.w3resource.com/mysql/encryption-and-compression-functions/encrypt().php#:~:text=MySQL%20ENCRYPT()%20encrypts%20a,systems%2C%20it%20will%20return%20NULL.)
