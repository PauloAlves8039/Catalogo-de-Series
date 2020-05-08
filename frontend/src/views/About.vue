<template>
  <div class="row justify-content-center">
    <div class="col-md-12">
      <h1 id="titulo-sobre" class="text-center">Sobre</h1>
    </div>

    <div id="card-autor">
      <b-card
        title="Autor"
        sub-title="Paulo Alves"
        img-src="https://images.pexels.com/photos/574080/pexels-photo-574080.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
        img-alt="Autor"
        img-top
        tag="article"
        style="max-width: 21rem;"
        class="mb-2"
      >
        <b-card-text>
          Graduado em Análise e Desenvolvimento de Sistemas,
          possui conhecimentos em tecnologias web e mobile.
          <br />Atualmente procura estar atualizado fazendo cursos, sempre buscando novos desafios.
        </b-card-text>

        <b-button
          href="https://github.com/PauloAlves8039/Catalogo-de-Series"
          variant="outline-primary"
          target="_blank"
        >Repositório do Projeto</b-button>
      </b-card>
    </div>

    <div id="card-tecnologias">
      <b-card
        title="Tecnologias"
        sub-title="Recursos Utilizados"
        img-src="https://images.pexels.com/photos/546819/pexels-photo-546819.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
        img-alt="Tecnologias"
        img-top
        tag="article"
        style="max-width: 21rem;"
        class="mb-2"
      >
        <b-list-group>
          <b-list-group-item>
            <b-link
              href="https://docs.mongodb.com/manual/release-notes/3.4/"
              class="card-link"
              target="_blank"
            >MongoDB</b-link>
          </b-list-group-item>
          <b-list-group-item>
            <b-link
              href="https://expressjs.com/en/changelog/4x.html"
              class="card-link"
              target="_blank"
            >Express</b-link>
          </b-list-group-item>
          <b-list-group-item>
            <b-link href="https://cli.vuejs.org/" class="card-link" target="_blank">Vue CLI</b-link>
          </b-list-group-item>
          <b-list-group-item>
            <b-link href="https://nodejs.org/en/" class="card-link" target="_blank">Node.Js</b-link>
          </b-list-group-item>
        </b-list-group>
      </b-card>
    </div>

    <div id="card-contato">
      <b-card
        title="Contatos"
        sub-title="Entre em contato"
        img-src="https://images.pexels.com/photos/6330/smartphone-notebook-technology-calendar.jpg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
        img-alt="Contato"
        img-top
        tag="article"
        style="max-width: 21rem;"
        class="mb-2"
      >
        <b-list-group>
          <b-list-group-item>
            <b-link
              href="https://www.linkedin.com/in/paulo-alves3486"
              class="card-link"
              target="_blank"
            >Linkedin</b-link>
          </b-list-group-item>
          <b-list-group-item>
            <b-link
              href="https://twitter.com/PauloJunior788"
              class="card-link"
              target="_blank"
            >Twitter</b-link>
          </b-list-group-item>
          <b-list-group-item>
            <b-link href="mailto:pj38alves@gmail.com" class="card-link" target="_blank">Gmail</b-link>
          </b-list-group-item>
          <b-list-group-item>
            <b-link
              href="https://github.com/PauloAlves8039"
              class="card-link"
              target="_blank"
            >GitHub</b-link>
          </b-list-group-item>
        </b-list-group>
      </b-card>
    </div>
  </div>
</template>

<style scoped>
#titulo-sobre {
  color: #42b983;
}

#card-autor,
#card-tecnologias,
#card-contato {
  margin: 20px 0 0;
  padding: 2px;
  filter: grayscale(100%);
}
#card-autor:hover,
#card-tecnologias:hover,
#card-contato:hover {
  filter: grayscale(0%);
  transition: filter 0.8s ease;
}
</style>
