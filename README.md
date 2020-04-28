<h1 align="center">:tv: Catalogo de Series</h1>

<p align="center">
  <a href="https://blog.npmjs.org/post/611593649031168000/release-6142"><img src="https://img.shields.io/badge/npm-v6.14.2-blue"></a>
  <a href="https://docs.mongodb.com/manual/release-notes/3.4/"><img src="https://img.shields.io/badge/mongodb-v3.4.10-%2390EE90"></a>
  <a href="https://expressjs.com/en/changelog/4x.html"><img src="https://img.shields.io/badge/express-v4.17.1-informational"></a>
  <a href="https://vuejs.org/"><img src="https://img.shields.io/badge/vue.js-v2.9.11-brightgreen"></a>
  <a href="https://nodejs.org/en/"><img src="https://img.shields.io/badge/node.js-v12.16.2-brightgreen"></a>
  <a href="https://cli.vuejs.org/"><img src="https://img.shields.io/badge/vue--cli-v4.2.3-brightgreen"></a>
  <a href="https://vuex.vuejs.org/guide/"><img src="https://img.shields.io/badge/vuex-v3.1.3-brightgreen"></a>
  <a href="https://router.vuejs.org/guide/#html"><img src="https://img.shields.io/badge/vue--router-v3.1.6-brightgreen"></a>
  <a href="https://getbootstrap.com/"><img src="https://img.shields.io/badge/bootstrap-v4.4.1-%23AB82FF"></a>
  <a href="https://bootstrap-vue.org/"><img src="https://img.shields.io/badge/bootstrap--vue-v2.12.0-%23AB82FF"></a>
  <a href="https://br.vuejs.org/v2/cookbook/using-axios-to-consume-apis.html"><img src="https://img.shields.io/badge/axios-v0.19.2-orange"></a>
  <a href="https://eslint.org/blog/2019/11/eslint-v6.7.2-released"><img src="https://img.shields.io/badge/eslint-v6.7.2-blueviolet"></a>
  <a href="https://www.postman.com/downloads/"><img src="https://img.shields.io/badge/postman-v7.22.1-%23FF4500"></a>
</p>

## :computer: Projeto
Repositório de uma aplicação web desenvolvida para fins didáticos, no qual tem como objetivo catalogar uma lista de series favoritas usando MEVN Stack.  

Nessa API é posivel realizar operações para listar, inserir, atualiza e excluir registros em uma interface gráfica com a utilização 
de dois modais e uma tabela com opções de manipulação desses registros.

## :wrench: Recursos Utilizados
- Visual Studio Code v1.44.1
- Postman v7.22.1
- Npm v6.14.2
- Bootstrap v4.4.1
- Bootstrap-vue v2.12.0
- MongoDb v3.4.10
- Express v4.17.1
- Vue.Js v2.9.11
- Node.Js v12.16.2
- Vue Router v3.1.6
- Vuex v3.1.3
- Vue CLI v4.2.3
- Axios v0.19.2
- Eslint v6.7.2

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
### Lista de series
![screenshot1](https://github.com/PauloAlves8039/Catalogo-de-Series/blob/master/frontend/src/assets/screenshot1.png)

### Modal para cadastro de serie
![screenshot2](https://github.com/PauloAlves8039/Catalogo-de-Series/blob/master/frontend/src/assets/screenshot2.png)

### Modal para editar serie
![screenshot3](https://github.com/PauloAlves8039/Catalogo-de-Series/blob/master/frontend/src/assets/screenshot3.png)

## Author
:boy: [Paulo Alves](https://github.com/PauloAlves8039)
