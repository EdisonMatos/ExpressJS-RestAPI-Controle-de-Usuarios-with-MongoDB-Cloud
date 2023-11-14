# 🚀 ExpressJS Controle de Usuários

## 📜 Descrição

Este repositório contém uma aplicação ExpressJS que oferece endpoints para controle de usuários. Com esta API simples, você pode realizar operações básicas de CRUD (Create, Read, Update, Delete) para gerenciar usuários. Siga as instruções abaixo para começar.

## 🛠️ Tecnologias Utilizadas

- **Node.js e npm:** Ambiente de execução e gerenciador de pacotes para JavaScript.
- **Express:** Framework web para Node.js.
- **Nodemon:** Ferramenta para reiniciar automaticamente a aplicação ao detectar alterações no código.

## 📋 Pré-requisitos  

- **Node.js e npm:** Baixe em [https://nodejs.org/](https://nodejs.org/).
- **Git:** Baixe em [https://git-scm.com/](https://git-scm.com/).
- **Docker Desktop:** Necessário para o banco de dados PostgreSQL. Baixe em [https://www.docker.com/products/docker-desktop](https://www.docker.com/products/docker-desktop).
- **Ferramentas de Teste de API:** <br>
Postman [https://www.postman.com/downloads/](https://www.postman.com/downloads/)<br>
Insomnia [https://insomnia.rest/download/](https://insomnia.rest/download/)<br>
Ou Thunder Client (extensão no Visual Studio Code).


<br>

## ⚙️ Configuração do Projeto

1. **Clonar o Repositório:**

    ```bash
    git clone https://github.com/seu-usuario/expressjs-full-application.git
    ```

2. **Instalar Dependências:**

    ```bash
    npm install
    ```

3. **Iniciar a Aplicação:**

    ```bash
    npm start
    ```

4. Acesse [http://localhost:3000](http://localhost:3000).

## 📄 Endpoints

A aplicação oferece os seguintes endpoints:

### 1. Listar Todos os Usuários

- **Método:** `GET`
- **Rota:** `/users`
- **Descrição:** Retorna a lista de todos os usuários.

### 2. Detalhes de um Usuário

- **Método:** `GET`
- **Rota:** `/users/:id`
- **Descrição:** Retorna os detalhes de um usuário específico com base no ID fornecido.

### 3. Criar um Usuário

- **Método:** `POST`
- **Rota:** `/users`
- **Descrição:** Cria um novo usuário. Envie um JSON no corpo da requisição com os detalhes do usuário, por exemplo:
  ```json
  {
    "name": "Edison"
  }
  ```

### 4. Atualizar um Usuário

- **Método:** `PUT`
- **Rota:** `/users/:id`
- **Descrição:** Atualiza as informações de um usuário com base no ID fornecido. Envie um JSON no corpo da requisição com os novos detalhes do usuário, por exemplo:
  ```json
  {
    "name": "Matos"
  }
  ```

### 5. Excluir um Usuário

- **Método:** `DELETE`
- **Rota:** `/users/:id`
- **Descrição:** Exclui um usuário com base no ID fornecido.

## 🧑‍💻 Autor

Este projeto foi desenvolvido por Edison Matos.

![Edison Matos](https://avatars.githubusercontent.com/u/17342047?s=200)

Edison Matos é um entusiasta da tecnologia, desenvolvedor backend de software e apaixonado por criar soluções inovadoras. Saiba mais sobre no [GitHub](https://github.com/EdisonMatos) para descobrir mais projetos e colaborações.

## 🤝 Contribuição

Se deseja contribuir para o desenvolvimento deste projeto, siga os passos abaixo:

1. Faça um fork do projeto.
2. Crie uma branch para suas alterações: `git checkout -b feature/nome-da-sua-feature`.
3. Faça as alterações desejadas e commit: `git commit -m 'Adiciona nova feature'`.
4. Push para a branch: `git push origin feature/nome-da-sua-feature`.
5. Abra um pull request para revisão.

## 📄 Licença

Este projeto é licenciado sob a Licença MIT.
