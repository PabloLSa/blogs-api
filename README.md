# Api de Blog

Desenvolvi API para um Blog com recursos de autenticação de usuários e operações CRUD de postagens. 
 
 O Sequelize ORM (Object-Relational Mapping) foi utilizado neste projeto para facilitar a interação com o banco de dados MySQL. Ele fornece uma abstração sobre as consultas SQL, permitindo que você defina e manipule os modelos de dados em JavaScript. 

 Para orientar a construção das tabelas através do ORM, utilizei o DER a seguir: 

![logo](der.png)

## Descrição

Este projeto é uma API para um Blog que permite aos usuários criar, ler, atualizar e excluir postagens. Além disso, possui uma camada de autenticação para proteger os endpoints e garantir que apenas usuários autenticados possam realizar certas operações.

A API é construída com Node.js e utiliza o framework Express para lidar com as rotas e requisições HTTP. O banco de dados utilizado é o MySQL, e o Sequelize é utilizado como ORM para interagir com o banco de dados.

## Funcionalidades

- Registro de usuários
- Autenticação de usuários
- Operações CRUD de postagens (Criar, Ler, Atualizar, Deletar)
- Proteção de rotas com autenticação JWT

## Endpoints

### Autenticação

- `POST /api/auth/register`: Registra um novo usuário.
- `POST /api/auth/login`: Autentica um usuário e retorna um token JWT.

### Postagens

- `GET /api/posts`: Retorna todas as postagens.
- `GET /api/posts/:id`: Retorna uma postagem específica.
- `POST /api/posts`: Cria uma nova postagem.
- `PUT /api/posts/:id`: Atualiza uma postagem existente.
- `DELETE /api/posts/:id`: Deleta uma postagem.

## Contribuição

Contribuições são bem-vindas! Se você encontrar algum problema ou tiver sugestões para melhorias, sinta-se à vontade para abrir uma issue ou enviar um pull request.
