<template>
  <div class="container">
    <h1 id="titulo-principal">Catálogo de Series</h1>

    <b-alert
      :show="dismissCountDown"
      dismissible
      :variant="message.color"
      @dismissed="dismissCountDown=0"
      @dismiss-count-down="countDownChanged"  
    >
      {{message.texto}}
    </b-alert>

    <form id="formulario-pesquisa" class="form-inline">
      <input type="text" id="pesquisar" placeholder="Pesquisar Serie" class="form-control mb-2 mr-sm-2 mb-sm-0">
      <b-button class="mb-2 mr-sm-2 mb-sm-0" id="btn-cancelar" pill variant="outline-dark">Cancelar</b-button>
      <b-button class="mb-2 mr-sm-2 mb-sm-0" id="btn-adicionar" pill variant="primary" @click="exibirModalAdicionar">Adicionar</b-button>
    </form>


    <b-modal ref="modal-adicionar" hide-footer title="Catalogo de Series">
      <form @submit="adicionarSerie(serie)" v-if="adicionar">
        <div class="d-block text-center">
          <h3 id="titulo-adicionar">Adicionar Serie</h3>
          <input type="text" id="titulo-adicionar" placeholder="Adicione um título" class="form-control my-2">
          <input type="text" id="genero-adicionar" placeholder="Adicione um genêro" class="form-control my-2">
          <input type="number" id="temporadas-adicionar" placeholder="Adicione as temporadas" class="form-control my-2">
          <b-button class="mt-2" variant="success" block type="submit">Salvar</b-button>
          <b-button class="mt-2" variant="dark" block @click="fecharModalAdicionar">Fechar</b-button>        
      </div>
      </form>      
    </b-modal>

    <b-modal ref="modal-atualizar" hide-footer title="Catalogo de Series">
      <form @submit="editarSerie(atualizarSerie)" v-if="editar">
        <div class="d-block text-center">
          <h3 id="titulo-editar">Atualizar Serie</h3>
          <input type="text" id="titulo-editar" placeholder="Atualizar título" class="form-control my-2">
          <input type="text" id="genero-editar" placeholder="Atualizar genêro" class="form-control my-2">
          <input type="number" id="temporadas-editar" placeholder="Atualizar temporadas" class="form-control my-2">
          <b-button class="mt-2" variant="success"   block type="submit">Atualizar</b-button>
          <b-button class="mt-2" variant="dark" block @click="fecharModalAtualizar">Fechar</b-button>        
      </div>
      </form>      
    </b-modal> 

    <table id="table-series" class="table table-light table-bordered table-hover">
      <thead>
        <tr class="thead-dark">
          <th scope="col">Título</th>
          <th scope="col">Genêro</th>
          <th scope="col">Temporadas</th>
          <th scope="col">Ação</th>
        </tr>
      </thead>
      <tbody class="table-active">
        <tr>
          <td>Teste</td>
          <td>Teste,Teste</td>
          <td>3</td>
          <td>
            <b-button class="btn-md mx-1" pill variant="success">Editar</b-button>
            <b-button class="btn-md mx-1" pill variant="danger">Excluir</b-button>
          </td>
        </tr>        
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  data() {
    return {
      series: [],
      serie: {titulo: '', genero: '', temporadas: 0},
      atualizarSerie: {},
      message: {color: 'success', texto: ''},
      dismissSecs: 5,
      dismissCountDown: 0,
      adicionar: true,
      editar: false
    }
  },
  methods: {
    exibirModalAdicionar() {
      this.$refs['modal-adicionar'].show()
    },
    fecharModalAdicionar() {
      this.$refs['modal-adicionar'].hide()
    },
    exibirModalAtualizar() {
      this.$refs['modal-atualizar'].show()
    },
    fecharModalAtualizar() {
      this.$refs['modal-atualizar'].hide()
    },
    countDownChanged(dismissCountDown) {
      this.dismissCountDown = dismissCountDown
    },
    showAlert() {
      this.dismissCountDown = this.dismissSecs
    }
  }
}
</script>

<style>

#titulo-principal, #titulo-adicionar  {
  color: #42b983;
}

#formulario-pesquisa, #table-series {
  margin-top: 20px;
}

</style>