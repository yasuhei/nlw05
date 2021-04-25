# projeto-nlw-node
## NLW-05 
No primeiro dia da nlw-05 vimos como o node.js trabalha e seus beneficios,preparamos o ambiente com a biblioteca do express e começamos a fazer as requisições GET e POST utilizando a ferramenta do inmsominia.
configuramos o typeORM para o banco de dados sqlite, vimos e criamos  as migrations  através  do typeorm
Criamos as entidades,
Criamos os repostorios para que tenha a interação entre a entidade e o banco de dados, com uma responsabilidade mais dividida.
Criamos as rotas das configurações e o controller da aplicação.
Criamos a estrutura do usuario, estrutura de connections e a estrutura de messagens.
Separamos a regra de negocio da aplicação para que cada estrutura tenha sua responsabilidade.
Fizemos o relacionamento One to One e many to one, o One to One é quando uma entidade só se relaciona com uma outra entidade, tipo...user se relaciona com messages, e o relacionamento Many to One, é quando muitas entidades se relaciona com uma entidade, ex, quando varias messeges de diferentes Id's se relaciona com um unico admin_id, 

### websocket
oque o protocolo websocket: uma requisicao do websocket só é perdida quando o cliente se desconecta do servidor, o cliente envia informação para o servidor e o servidor tambem envia informação sem que o cliente tenha requisitado alguma coisa. 
 e configuramos e utilizamos uma biblioteca socket.io 
criamos  a estrutura de connections

![chat](https://github.com/yasuhei/nlw05/blob/main/unknown.png)
