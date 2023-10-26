<h1>API de Lista de Usuários em Banco de Dados (MongoDB) com Node (ExpressJS)</h1>

<p align="center">
  <img src="https://img.shields.io/static/v1?label=Javascript&message=Linguagem&color=blue&style=for-the-badge&logo=javascript"/>
  <!--<img src="https://img.shields.io/static/v1?label=Vercel&message=deploy&color=blue&style=for-the-badge&logo=vercel"/>-->
  <!--<img src="http://img.shields.io/static/v1?label=License&message=MIT&color=green&style=for-the-badge"/>-->
  <img src="http://img.shields.io/static/v1?label=Node&message=18.16.1&color=red&style=for-the-badge&logo=node"/>
  <img src="http://img.shields.io/static/v1?label=ExpressJS&message=4.18.2&color=red&style=for-the-badge&logo=express"/>
</p>
<br>

<p align="center">
   <img src="http://img.shields.io/static/v1?label=STATUS&message=CONCLUIDO&color=RED&style=for-the-badge"/>
</p>

## Tópicos

:small_blue_diamond: [Descrição do projeto](#descrição-do-projeto)

:small_blue_diamond: [Funcionalidades da aplicação](#funcionalidades-da-aplicação)

<!--:small_blue_diamond: [Deploy da Aplicação](#link-da-aplicação-dash)-->

:small_blue_diamond: [Pré-requisitos](#pré-requisitos)

:small_blue_diamond: [Como rodar a aplicação](#como-rodar-a-aplicação-arrow_forward)

<br>

## Descrição do projeto

<p align="justify">
  Esta API é uma aplicação no padrão REST que utiliza os métodos GET, CREATE, PUT e DELETE nas requisições usando o protocolo HTTP. Tem por finalidade manusear um backend totalmente funcional, aplicando conhecimento em Node (com o framework Express), somado a um banco de dados NoSQL (MongoDB) e com deploy feito na Vercel, possibilitando um teste com a aplicação já no ar. 
</p>

<br>

## Funcionalidades da aplicação 

:heavy_check_mark: Armazena dados na própria memória

:heavy_check_mark: Lista, insere, atualiza e remove conjunto de dados

:heavy_check_mark: Valida entrada de dados e endpoints contra entradas incorretas

:heavy_check_mark: Retorna mensagens de erro personalizadas

:heavy_check_mark: Usa do terminal para fins de instrução

<br>

<!--## Link da aplicação :dash:

> Em breve: Na Vercel (https://vercel.com/) -->

## Pré-requisitos

Você precisa ter os itens abaixo instalados na sua máquina para rodar a aplicação:

:white_check_mark: [Node](https://nodejs.org/en/download/) 

:white_check_mark: [GIT](https://git-scm.com/downloads)

Algum client http para fazer requisições para APIs. Recomendo qualquer uma das opções abaixo:

:white_check_mark: [Postman](https://www.postman.com/downloads/) ou :white_check_mark: [Insomnia](https://insomnia.rest/download) ou :white_check_mark: [Thuder Client - Extensão do VS Code](https://marketplace.visualstudio.com/items?itemName=rangav.vscode-thunder-client)

<br>

## Como rodar a aplicação :arrow_forward:

Dentro da pasta onde deseja baixar a aplicação, abra o terminal e clone o projeto através do comando:

```
git clone https://github.com/EdisonMatos/ExpressJS-Full-Application.git
```
Acesse o conteúdo da pasta baixada através do comando:
```
cd ExpressJS-Full-Application
```
Dentro da pasta, instale as dependências necessárias para rodar a aplicação através do comando:
```
npm install
```

Agora, para iniciar a aplicação:
```
npm run dev
```

Caso precise encerrar a aplicação:
```
cmd + c (no mac)

ou

ctrl + c (no windows)
```

<br>

## Como testar as funcionalidades da aplicação 

Após a aplicação estar rodando, abra o client de requisição http de sua preferência.

Para fazer as requisições, siga o passo a passo a seguir:

<br> 
<a href="https://ibb.co/ZmKNRFj"><img src="https://i.ibb.co/NSp7gJv/Captura-de-Tela-2023-10-25-s-15-10-18.png" alt="Captura-de-Tela-2023-10-25-s-15-10-18" border="0"></a>
<br>

1. Selecionar o tipo de requisição (no nosso caso, GET, POST, PUT ou DELETE)

2. Preencher com a url do endpoint desejado (ex: localhost:3000/users

3. Se for requisição que envia conteúdo no seu body, selecionar a opção BODY/JSON e preencher o espaço com o padrao JSON. Ex: {"name": "Edison"}

4. Após essas etapas terem sido concluídas, clicar em SEND para enviar a requisição e esperar a resposta da API no quadrante inferior.

<br>

## Testando a aplicação

Nesta aplicação temos um CRUD completo (CRUD = acrônimo para Create, Read, Update e Delete), desta forma conseguimos manipular os dados que iremos armazenar das seguinte formes: criando, visualizando, editando e deletando eles.

<br>

## CREATE - Uso do método POST.

Para criar um conjunto de dados simples (neste caso, usuário apenas com nome), selecione o método POST, no endpoint localhost:3000/users e preencha o corpo da requisição com o seguinte código em json, e clique em enviar requisição:

```
{
"name": "Edison"
}
```
Obs: Nesta aplicação, a única propriedade obrigatória é o "name". Você pode inserir o que mais quiser desde que siga o padrão "chave": "valor".

<br>

## READ - Uso do método GET

Para termos acesso aos dados já armazenados, usaremos duas formas:

Read All - Lista todos os nomes armazenados: Selecione o método GET no endpoint localhost:3000/users e clique em enviar.

Read by id - Lista um nome em específico: Selecione o método GET no endpoint localhost:3000/users/1 e clique em enviar. Neste exemplo, voce acessará o primeiro nome que você armazenou. O número "1" adicionado ao final do endpoint localiza exatamente o 1º item na lista de nomes armazenados. Caso adicione mais de um, pode mudar o endpoint para 2, 3, etc, para visualizar os outros. 

<br>

### UPDATE - Uso do método PUT.

Para atualizar as informações (neste caso, sobrescrever), selecione o método PUT, no endpoint com o número do nome desejado (ex: Se quiser alterar o 1º nome da lista, utilize localhost:3000/1 e preencha o corpo da requisição com o seguinte código em json com o novo nome:

```
{
"name": "Eduardo"
}
```

<br>

## DELETE - Uso do método DELETE.

Para deletar um nome preenchido anteriormente, selecione o método DELETE, no endpoint com o número do nome desejado (ex: Se quiser deletar o 1º nome da lista, utilize localhost:3000/1 e clique em enviar.

---

<br>

## Considerações finais

Este é um CRUD bem simples e com algumas validações (como necessidade do "name" ou impedindo que requests sejam feitas de forma incorreta, como enviar um dado alfabético no endpoint que deve receber apenas números, com foco em utilizar o ExpressJS para criar o servidor e manusearmos através de requisições do protocolo http, armazenando as informações na memória da própria aplicação. 

Abraço.

<br>

## Linguagens, dependencias e libs utilizadas :books:

- [Express](https://expressjs.com/pt-br/)
- [Nodemon](https://www.npmjs.com/package/nodemon)

<!--

## Casos de Uso

Explique com mais detalhes como a sua aplicação poderia ser utilizada. O uso de **gifs** aqui seria bem interessante.

Exemplo: Caso a sua aplicação tenha alguma funcionalidade de login apresente neste tópico os dados necessários para acessá-la.

## JSON :floppy_disk:

### Usuários:

| name      | email                  | password | token | avatar                                                                                                              |
| --------- | ---------------------- | -------- | ----- | ------------------------------------------------------------------------------------------------------------------- |
| Lais Lima | laislima98@hotmail.com | lais123  | true  | https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcS9-U_HbQAipum9lWln3APcBIwng7T46hdBA42EJv8Hf6Z4fDT3&usqp=CAU |

...

Se quiser, coloque uma amostra do banco de dados

## Iniciando/Configurando banco de dados

Se for necessário configurar algo antes de iniciar o banco de dados insira os comandos a serem executados

...

Liste as tecnologias utilizadas no projeto que **não** forem reconhecidas pelo Github

## Resolvendo Problemas :exclamation:

Em [issues]() foram abertos alguns problemas gerados durante o desenvolvimento desse projeto e como foram resolvidos.

## Tarefas em aberto

Se for o caso, liste tarefas/funcionalidades que ainda precisam ser implementadas na sua aplicação

:memo: Tarefa 1

:memo: Tarefa 2

:memo: Tarefa 3

## Desenvolvedores/Contribuintes :octocat:

Liste o time responsável pelo desenvolvimento do projeto

| [<img src="https://avatars2.githubusercontent.com/u/46378210?s=400&u=071f7791bb03f8e102d835bdb9c2f0d3d24e8a34&v=4" width=115><br><sub>Diana Regina</sub>](https://github.com/Diana-ops) | [<img src="https://avatars2.githubusercontent.com/u/46378210?s=400&u=071f7791bb03f8e102d835bdb9c2f0d3d24e8a34&v=4" width=115><br><sub>Diana Regina</sub>](https://github.com/Diana-ops) | [<img src="https://avatars2.githubusercontent.com/u/46378210?s=400&u=071f7791bb03f8e102d835bdb9c2f0d3d24e8a34&v=4" width=115><br><sub>Diana Regina</sub>](https://github.com/Diana-ops) |
| :-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------: | :-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------: | :-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------: |

-->

## Licença

The [MIT License]() (MIT)

Copyright :copyright: Ano 2023 - API de Lista de Usuários em Banco de Dados (MongoDB) com Node (ExpressJS)
