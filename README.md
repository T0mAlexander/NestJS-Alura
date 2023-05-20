# CRUD Básico com Nest.js

## Descrição
>
> Este mini repositório foi publicado com propósitos para fundamentação e concepção de novas API RESTful tendo como ferramenta principal o popular framework Nest.js.

## Padrões de projeto

- **DTO (Data Transfer Object):** é um padrão de projeto para simplificar a transmissão de dados entre diferentes partes de um sistema único fazendo o papel de empacotamento dos dados necessários para envio ou recebimento e fazendo com que isso evite exposição pública das lógicas sistêmicas

- **Controller:** é um controlador que define e recebe requisições HTTP. Ele atua como um intermediário que popularmente no mundo de software, são chamados de **middlewares** e possibilita aplicação de lógicas e especificidades extras para tratativa antes que os métodos HTTP sejam acionados

- **Module:** é um agrupador de componentes de um sistema assim como o controlador/middleware. Define as dependências essenciais para funcionamento dos componentes e também as configurações das mesmas.

- **Service:** é outro agrupador porém das lógicas sistêmicas. Encapsula funcionalidades específicas e é usado pelos controladores para performar operações mais complexas. São injetados nos controladores ou em outro serviço através de um decorador Typescript batizado de `@Injectable` fornecido pelo próprio Nest.js

- **Design Patterns:** padrão de projeto que provê abordagens, organização e estruturação pré-definida para soluções de problemas recorrentes durante desenvolvimento de softwares

- **SOLID:** príncipios de design de software para modularização, extensão e manutenibilidade de código. Frequentemente aliado ao Design Patterns para organização, componentização e testabilidade de código.

## Instalação e uso

1. Clone o repositório

```bash
git clone https://github.com/T0mAlexander/NestJS-Alura
```

2. Acesse o repositório

```bash
cd NestJS-Alura
```

3. Instale as dependências

```bash
npm install
```

4. Inicie o servidor

```bash
npm run nest:start
```

> - Nota: o servidor será instanciado na porta **3333**

## Rotas e usos

> - Envios de dados para testagem da API devem ser feitos no formato **JSON**

- `GET /users`: retorna a lista de usuários cadastrados retornando apenas o identificador único (**id**) e nome

- `POST /users` registra um novo usuário na base de dados

  <details>
    <summary>Estrutura do envio de dados</summary>

    ```javascript
    {
      "name": "string",
      "email": "string",
      "password": "string" // obrigatório, mínimo 6 dígitos
    }
    ```

  </details>

- `PUT /users/:id`: edita e sobrescreve dados de um usuário já existente na base de dados

- Requisitos: ID de um usuário existente na base de dados. Este ID irá substituir o `:id`

  <details>
    <summary>Estrutura do envio de dados</summary>

    ```javascript
    {
      "name": "string", // opcional
      "email": "string", // opcional
      "password": "string" // opcional
    }
    ```

  </details>

- `DELETE /users/:id`: exclui um usuário e seus respectivos dados

- Requisitos: ID de um usuário existente na base de dados

## Termos de uso

Este projeto é de livre uso para outros sem nenhuma restrição para cópias ou forks 👍🏻

### Autor: Tom Alexander