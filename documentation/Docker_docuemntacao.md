# Documentação uso Docker

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
    (pwd) -> print working directory/ coloca o diretorio atual no comando como uma variavel
```

### ***exec*** [docs](https://docs.docker.com/engine/reference/commandline/exec/)

#### Executar arquivos dentro de uma container

```bash
docker exec -i {nome-do-meu-container} {meu-programa} {comandos utilizados}
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

____________________________
