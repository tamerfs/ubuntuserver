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

*git pull -> serverubuntu (/home/tamer/dockerserver)*

[stackoverflow - connection refused on docker container](https://stackoverflow.com/questions/36813690/connection-refused-on-docker-container)

[superuser - connnect to linux using putty over the internet](https://superuser.com/questions/830568/connnect-to-linux-from-windows-using-putty-over-the-internet)

[hostinger - tutorial docker](https://www.hostinger.com.br/tutoriais/install-docker-ubuntu)

[docker run -d -net=host {imagem}](https://linuxhint.com/what-does-net-host-option-in-docker-compose-really-do/#:~:text=The%20%E2%80%9C%E2%80%93net%3Dhost%E2%80%9D%20option%20is%20utilized%20to%20execute,option%20%E2%80%9D%20command.)

[docker logs](https://sematext.com/blog/docker-logs-location/)

[journalctl -f](https://www.digitalocean.com/community/tutorials/how-to-use-journalctl-to-view-and-manipulate-systemd-logs-pt)
_____________

### Comandos gerais no docker

```bash
docker image ls    =>     lista as imagens do docker baixadas no local disponíveis para uso
docker ps  =>  mostra os processos ou containes ativos.
docker rmi {idImagem}  =>  remover imagens pelo ID ( -f para forçar )  
docker inspect {nome do container} =>  para ver informações de um container 
```

### ***build***

#### Criar ou Baixar uma imagem padrão na nuvem com um Dockerfile

```bash

docker build -t {nome-image} -f {diretorio-do-dockerfile}/Dockerfile .
docker build -t {sua_tag}/{nome-image} -f {diretorio-do-dockerfile}/Dockerfile .

docker build -t mysql-image -f ./dockerserver/API_NODE/Dockerfile .
docker build -t node-image -f ./dockerserver/db/Dockerfile .

 -f -> endereço do dockerfile
 -t -> taguear a imagem a subir #tty significa usar o terminal
Dockerfile . -> parametros que podemos usar na hora da criação da imagem

```

* diretorio arquivo da API node : ~/dockerserver/API_NODE/Dockerfile
* diretorio arquivo do db mySQL : ~/dockerserver/db/Dockerfile

### ***run***

#### Subir um container a partir de uma imagem baixada

```bash
docker run -d --rm --name {nome-do-meu-container} {nome-da-minha-image-salva}

 -d -> daemon ou detach se nao vai prender o terminal
 -- rm ->  remove se ja tiver um de pé
 --name  -> nome do novo container a subir
```

#### Subir um container + um volme como host da imagem do container para salvar os dados da máquina

```bash
docker run -d -v $(pwd)/data:/var/lib/{meu-programa} --rm --name meu-container-instancia minha-imagem-baixada 

docker run -d -v $(pwd)/db:$(pwd)/persistent_disk/mysql --rm --name mysql-container-instancia mysql-image 
docker run -d -v $(pwd)/API_NODE:$(pwd)/persistent_disk/node -p9001:9001 --link mysql-container --rm --name node-container-instancia node-image

 -d -> daemon ou detach, para executar mas desacoplado deixando o terminal livre
 -v -> volume, ou seja, liga a pasta host a pasta container
 -p -> porta do link entre os dois
 --link -> relacionar um conteiner no outro
 --rm ->  remove se ja tiver um de pé
 --name  -> nome do novo container a subir
$(pwd) -> print working directory/ coloca o diretorio atual no comando como uma variavel

funcionamento => diretório/da/imagem/atual: diretório/do/volume
```

### ***exec***

#### Executar arquivos dentro de uma container

```bash
docker exec -i {nome-do-meu-container} {meu-programa} {comandos utilizados}

docker exec -i mysql-container-instance mysql -uroot -pdatabasesql < api/db/script.sql

nome-do-meu-container -> nome do container que vamos utilizar como mysql-container
meu-programa -> será o programa que vamos utilizar como por exemplo o __mysql__
 -u  -> usuário
 -p  -> senha de acesso ao sql
 -i  -> comando no modo interativo -> processo como shell executar o processo até que tudo do como script.sql seja executado
 <  -> seta para dizer que vamos executar tal arquivo no shell com o -i
```

#### Executar comandos dentro de uma container

```bash
docker exec -it {meu-container} /bin/bash

docker exec -it mysql-container /bin/bash

meu-container -> container rodando que vamos acessar
bin/bash -> abre na linha para usar o bash/prompt para comandos
```

### ***bin/bash***

##### Exemplo do uso do terminal do container

```bash
bash# mysql -uroot -pdatabasesql
mysql> USE {banco de dados} databasesql;
mysql> SELECT * FROM {nome da tabela criada} devices;
```

#### Exemplo usando npm e node no bash

```bash
instal npm -y
npm install --save-dev nodemon (manter a aplicação sempre rodando)
npm install --save express mysql
```

{
    "MD013": false
}
