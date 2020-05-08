<template>
  <div class="hello">
    <h1 id="titulo-inicio" class="text-center">{{ msg }}</h1>
    <div class="row justify-content-center">
      <div>
        <b-card
          overlay
          img-src="https://cdn.pixabay.com/photo/2015/10/31/12/07/tv-1015426_960_720.jpg"
          img-alt="Início"
          text-variant="black"
          title="Catálogo de Séries"
          sub-title="Projeto">
          <b-card-text>Aplicação web desenvolvida para fins didáticos com o objetivo de catalogar uma lista de series.</b-card-text>
        </b-card>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  }
}
</script>

<style scoped>
h3 {
  margin: 40px 0 0;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}

#titulo-inicio{
  color: #42b983;
}
</style>
