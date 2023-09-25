_____________

### Comandos gerais no docker

```bash
docker image ls    =>     lista as imagens do docker baixadas no local disponíveis para uso
docker ps  =>  mostra os processos ou containes ativos.
docker ps -a => ver todos os containers mesmo parados
docker rmi {idImagem}  =>  remover imagens pelo ID ( -f para forçar )  
docker rename {antigo nome da imagem } {novo nome}
docker tag {antigo nome da imagem} { novo nome }
docker inspect {nome do container} =>  para ver informações de um container 
docker logs {container ID}
docker cp index.js instance-node-16:/home/node/app/src/index.js
docker update --restart=no my-container
docker update --restart=always my-container
docker update --restart=on-failure my-container
docker update --restart=unless-stopped my-container
docker update --restart=always my-container
sudo docker kill rabbitmq
sudo aa-remove-unknown {limpa o apparmor do linux que bloqueia as ações que desligam os dockers criados}
sudo apparmor_parser -r /etc/apparmor.d/*snap-confine*
sudo apparmor_parser -r /var/lib/snapd/apparmor/profiles/snap-confine*
sudo systemctl enable --now snapd.socket

```

### ***build*** [docs](https://docs.docker.com/engine/reference/commandline/build/)

```bash
docker build -t mysql-image -f ./db/Dockerfile .
docker build -t node-image -f ./API_NODE/Dockerfile .
docker build -t ubuntu -f ./ngrok/Dockerfile .

```

### ***run*** [docs](https://docs.docker.com/engine/reference/commandline/run/)

#### Subir um container a partir de uma imagem baixada

```bash
docker run -d -v $(pwd)/db:$(pwd)/persistent_disk/mysql --rm --name mysql-container-instancia mysql-image 
docker run -d -v $(pwd)/db:$(pwd)/persistent_disk/mysql --rm -p 0.0.0.0:3306:3306 --name mysql-exposed mysql-image 
docker run -d -v $(pwd)/db:$(pwd)/persistent_disk/mysql --restart=always -p 0.0.0.0:3306:3306 --name mysql-exposed mysql-image 
docker run -d -v $(pwd)/API_NODE:$(pwd)/persistent_disk/node -p 0.0.0.0:9001:9001 --link instance-mysql --rm --name instance-node-alpine node-image
docker run -d -v $(pwd)/API_NODE:$(pwd)/persistent_disk/node -p 0.0.0.0:4040:4040 --link mysql-exposed --restart=always --name instance-node node-16/node-image
docker run -it -v $(pwd)/ngrok:/$(pwd)/persistent_disk/ngrok --restart=always --name instancia-linux ubuntu 
docker run -it --name myalpine -d alpine
docker run -i -e  NGROK_AUTHTOKEN=2VPvMv2eXle1XHe8CInEKnVEGoE_4R4AXxVfwR1TMpUWfD6TE ngrok/ngrok http 0.0.0.0:9001:9001 --domain=resolved-duck-proper.ngrok-free.app --basic-auth 'tamer:mysqldbapi'
docker run -it -e NGROK_AUTHTOKEN=2VPvMv2eXle1XHe8CInEKnVEGoE_4R4AXxVfwR1TMpUWfD6TE ngrok/ngrok http 0.0.0.0:4040 --domain=lion-natural-factually.ngrok-free.app
docker run -it -e NGROK_AUTHTOKEN=2VPvMv2eXle1XHe8CInEKnVEGoE_4R4AXxVfwR1TMpUWfD6TE ngrok/ngrok tunnel --label edge=edghts_2VUyMkTZa8D0cM6Bivdb4HiUZzA http://localhost:80

```

### ***exec*** [docs](https://docs.docker.com/engine/reference/commandline/exec/)

#### Executar arquivos dentro de uma container

```bash

docker exec -i instance-mysql mysql -uroot -pdatabasesql < db/initial_script_database.sql
docker exec -it mysql-container /bin/bash
docker exec -it --user root myalpine /bin/sh


```

### ***bin/bash***


```bash
bash# mysql -uroot -pdatabasesql
mysql> USE {banco de dados} databasesql;
mysql> SELECT * FROM {nome da tabela criada};
```


```bash
instal npm -y
npm install --save-dev nodemon (manter a aplicação sempre rodando)
npm install --save express mysql
```
