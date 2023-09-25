# ubuntuserver com 3 containers BACK / API / FRONT

-> interligando o VSCODE(win10) - clonar repositorio e autenticar com uma chave ssh <br> 
-> interligar o repositorio do git no serviodr(linux ubuntu) e autenticar com uma chave shae256 <br>
-> adicionar container mysql <br>
-> adicionar containr API node <br>
-> interligar via rede Nodes e Pods <br>
-> dar request pelo chrome via LAN na API e ter responde dos dados <br>
-> dar commit das imagens e salvar no docker.io <br>
-> acrescentar mais requests e auth na API e consumir via Postman <br>
-> adicionar conteiner js ou PHP para consumo/FrontEnd <br>
-> adicionar CI/CD com jenkins para o repo main <br>

*git pull -> serverubuntu ( /home/tamer/dockerserver ou ~/dockerserver )*

_____________

## Containers no docker

| CONTAINER ID | IMAGE | COMMAND | CREATED | STATUS | PORTS | NAMES |
|---|---|---|---|---|---|---|
|dac181a97b7b | lts-16/node-image | "docker-entrypoint.s…" | 2 days ago | Up 21 minutes | 0.0.0.0:4040->4040/tcp, 9001/tcp | node-prd |
|780f8f224e45 | mysql-image | "docker-entrypoint.s…" | 2 days ago | Up 29 minutes | 0.0.0.0:3306->3306/tcp, 33060/tcp | mysql-prd |

______

## Imagens no docker

| CONTAINER ID | IMAGE | COMMAND | CREATED | STATUS | PORTS | NAMES |
|---|---|---|---|---|---|---|
|dac181a97b7b | lts-16/node-image | "docker-entrypoint.s…" | 2 days ago | Up 21 minutes | 0.0.0.0:4040->4040/tcp, 9001/tcp | node-prd |
|780f8f224e45 | mysql-image | "docker-entrypoint.s…" | 2 days ago | Up 29 minutes | 0.0.0.0:3306->3306/tcp, 33060/tcp | mysql-prd |

______

## MySQL Instance

| Database | tables | collumns |
|--- |--- |--- |
| DATALAKE_SQL | RAW_products | id,<br>name,<br>price |
| DATALAKE_SQL | application_user | id,<br>username,<br>password,<br>user_last_name,<br>user_first_name,<br>cpf_cnpj,<br>email,<br>data_nascimento |

______

## Node Instance

Files = >

* index.js -> instancia o express e chama o listem port na 9001 ou 4040 <br>
* sdb_connection.js -> instancia o mysql e cria a conexão com o banco de dados <br>

Endopoints =>

* '/' <br>
* '/products' <br>
* '/users'
______

### Rascunho do funcionamento

__GET__ status do servidor<br>
    Endpoint => '/'<br>
    Response => OK em json ou throw error<br>

__POST__ com Basic auth de login<br>
    Endpoint =>  '/token'<br>
    Response =><br>
        *Backend* => Compara informações users no sql<br>
            -> Se ok  response 200 + token de acesso<br>
            -> Se n response 400<br>
        *Frontend*<br>
            -> pega e guarda o token<br>

__GET__ com token de acesso<br>
    Endpoint =>  '/products'<br>
    Response =><br>
        Query => 'select * RAW_products;'<br>

__GET__ com token de acesso<br>
    Endpoint =>  /users<br>
    Response =><br>
        Query =>  'select * application_user;'<br>

__POST__ com token acesso<br>
    Endpoint =>  '/users/id'<br>
    Response =><br>
        Query =>  'application_user %%;'<br>

__GET__ com token como auth<br>
    Endpoint '/token/validate'<br>
    Response =><br>
        FN  => Valida o token<br>


__POST__ com token acesso<br>
    Endpoint => '/products/add'<br>
    Response =><br>
        Query => 'Insert into RAW_products %%;' <br>