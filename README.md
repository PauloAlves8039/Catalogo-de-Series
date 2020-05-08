<h1 align="center">:tv: Catálogo de Séries</h1>

<p align="center">
  <a href="https://docs.mongodb.com/manual/release-notes/3.4/"><img src="https://img.shields.io/badge/mongoDB-v3.4.10-yellowgreen"></a>
  <a href="https://expressjs.com/en/changelog/4x.html"><img src="https://img.shields.io/badge/express-v4.17.1-informational"></a>
  <a href="https://cli.vuejs.org/"><img src="https://img.shields.io/badge/vue--cli-v4.2.3-%2390EE90"></a>
  <a href="https://nodejs.org/en/"><img src="https://img.shields.io/badge/node.js-v12.16.2-%23228B22"></a>
</p>

## :computer: Projeto
Repositório de uma aplicação web desenvolvida para fins didáticos, no qual tem como objetivo catalogar uma lista de series favoritas usando MEVN Stack.  

Nessa API é posivel realizar operações para listar, inserir, pesquisar, atualizar e excluir registros em uma interface gráfica com a utilização 
de dois modais e uma tabela com opções de manipulação desses registros.

## :wrench: Recursos Utilizados
- [Visual Studio Code v1.44.1](https://code.visualstudio.com/).
- [Postman v7.22.1](https://www.postman.com/).
- [Npm v6.14.2](https://blog.npmjs.org/post/611593649031168000/release-6142).
- [Bootstrap v4.4.1](https://getbootstrap.com/).
- [Bootstrap-vue v2.12.0](https://bootstrap-vue.org/).
- [MongoDb v3.4.10](https://docs.mongodb.com/manual/release-notes/3.4/). 
- [Express v4.17.1](https://expressjs.com/en/changelog/4x.html). 
- [Vue.Js v2.9.11](https://cli.vuejs.org/). 
- [Node.Js v12.16.2](https://nodejs.org/en/).
- [Vue Router v3.1.6](https://router.vuejs.org/guide/).
- [Vuex v3.1.3](https://vuex.vuejs.org/guide/).
- [Vue CLI v4.2.3](https://cli.vuejs.org/).
- [Axios v0.19.2](https://br.vuejs.org/v2/cookbook/using-axios-to-consume-apis.html).
- [Eslint v6.7.2](https://eslint.org/blog/2019/11/eslint-v6.7.2-released).
- [Pexels.](https://www.pexels.com/pt-br/).

## :floppy_disk: Instalação
Baixar repositório ```git clone https://github.com/PauloAlves8039/Catalogo-de-Series.git```

### Backend
- Abra a pasta ```Catalogo-de-Series/backend``` no prompt de comando do Windows.
- Execute ```npm install``` para instalar os módulos necessários do NodeJs.
- Execute ```npm run devbabel``` para iniciar o servidor backend ```localhost:3000/```.

### Frontend
- Abra a pasta ``` Catalogo-de-Series/frontend ``` no prompt de comando do Windows.
- Execute ```npm install``` para instalar os módulos necessários do Vue CLI.
- Execute ```npm run devserve``` para iniciar o servidor frontend. ```localhost:8080/#/```.

## :pencil2: Informações para uso do Postman
O Postman pode ser usado direto no navegador google chome [Download](https://chrome.google.com/webstore/detail/postman/fhbjgbiflinjbdggehcddcbncdddomop).  

As rotas da aplicação são utilizadas com a URL ```localhost:3000/api/rota```.  
Ex: para adicionar um registro utilizo a rota: ```localhost:3000/api/nova-serie```.


 ROTAS                    |     Verbos HTTP   |      Descrição        | 
------------------------- | ----------------- | --------------------- | 
/api/nova-serie           |       POST        | Adicionar             | 
/api/serie                |       GET         | Selecionar todos      | 
/api/serie/id             |       GET         | Selecionar por Id     | 
/api/serie/id             |       PUT         | Atualizar por Id      |    
/api/serie/id             |       DELETE      | Excluir por Id        |


## :camera: Screenshots
### Página inicial
![screenshot1](https://github.com/PauloAlves8039/Catalogo-de-Series/blob/master/frontend/src/assets/images/screenshot1.png)

### Página sobre
![screenshot2](https://github.com/PauloAlves8039/Catalogo-de-Series/blob/master/frontend/src/assets/images/screenshot2.png)

### lista de séries
![screenshot3](https://github.com/PauloAlves8039/Catalogo-de-Series/blob/master/frontend/src/assets/images/screenshot3.png)

### Modal para adicionar série
![screenshot4](https://github.com/PauloAlves8039/Catalogo-de-Series/blob/master/frontend/src/assets/images/screenshot4.png)

### Modal para atualizar série
![screenshot5](https://github.com/PauloAlves8039/Catalogo-de-Series/blob/master/frontend/src/assets/images/screenshot5.png)

## Author
:boy: [Paulo Alves](https://github.com/PauloAlves8039)
