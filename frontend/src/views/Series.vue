<template>
  <div >
    <h1 id="titulo-principal" class="text-center">Catálogo de Séries</h1>

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
      <input type="text" id="pesquisar" placeholder="Pesquisar Séries" class="form-control mb-2 mr-sm-2 mb-sm-0" v-model="pesquisa">
      <b-button class="mb-2 mr-sm-2 mb-sm-0" id="btn-cancelar" pill variant="outline-dark" @click="limparCampoPesquisa">Cancelar</b-button>
      <b-button class="mb-2 mr-sm-2 mb-sm-0" id="btn-adicionar" pill variant="success" @click="exibirModalAdicionar">Adicionar</b-button>
    </form>


    <b-modal ref="modal-adicionar" hide-footer title="Catálogo de Séries">
      <form @submit="adicionarSerie(serie)" v-if="adicionar">
        <div class="d-block text-center">
          <h3 id="titulo-adicionar">Adicionar Série</h3>
          <input type="text" id="titulo-add" placeholder="Adicione um título" class="form-control my-2" v-model="serie.titulo">
          <input type="text" id="genero-add" placeholder="Adicione um gênero" class="form-control my-2" v-model="serie.genero">
          <input type="number" id="temporadas-add" placeholder="Adicione as temporadas" class="form-control my-2" v-model="serie.temporadas">
          <b-button class="mt-2" variant="success" block type="submit">Salvar</b-button>
          <b-button class="mt-2" variant="dark" block @click="fecharModalAdicionar">Fechar</b-button>        
      </div>
      </form>      
    </b-modal>

    <b-modal ref="modal-atualizar" hide-footer title="Catálogo de Séries">
      <form @submit="editarSerie(atualizarSerie)" v-if="editar">
        <div class="d-block text-center">
          <h3 id="titulo-editar">Atualizar Série</h3>
          <input type="text" id="titulo-edt" placeholder="Atualizar título" class="form-control my-2" v-model="atualizarSerie.titulo">
          <input type="text" id="genero-edt" placeholder="Atualizar gênero" class="form-control my-2" v-model="atualizarSerie.genero">
          <input type="number" id="temporadas-edt" placeholder="Atualizar temporadas" class="form-control my-2" v-model="atualizarSerie.temporadas">
          <b-button class="mt-2" variant="primary" block type="submit">Atualizar</b-button>
          <b-button class="mt-2" variant="dark" block @click="fecharModalAtualizar">Fechar</b-button>        
      </div>
      </form>      
    </b-modal> 

    <table id="table-series" class="table table-light table-bordered table-hover text-center">
      <thead>
        <tr class="thead-dark">
          <th scope="col">Título</th>
          <th scope="col">Gênero</th>
          <th scope="col">Temporadas</th>
          <th scope="col">Ação</th>
        </tr>
      </thead>
      <tbody class="table-active" v-for="(item, indice) in pesquisarSerie" :series="indice" :key="indice.titulo">
        <tr>
          <td>{{ item.titulo }}</td>
          <td>{{ item.genero }}</td>
          <td>{{ item.temporadas }}</td>
          <td>
            <b-button class="btn-md mx-1" pill variant="primary" @click="ativarEdicao(item._id)">Editar</b-button>
            <b-button class="btn-md mx-1" pill variant="danger" @click="excluirSerie(item._id)">Excluir</b-button>
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
      editar: false,
      pesquisa: ''
    }
  },

  created() {
    this.listarSeries()
  },

  computed: {
    /**
     * Responsável posquisar serie pelo título.
     * @function 
     * @name pesquisarSerie
     */
    pesquisarSerie(){
      return this.series.filter((s) => {
        return s.titulo.match(this.pesquisa)
      })
    }
  },

  methods: {
    /**
     * Realiza o carregamento de todas as series cadastradas.
     * @function
     * @name listarSeries
     */
    listarSeries() {
      this.axios
        .get('/serie')
        .then(res => {
          console.log(res.data)
          this.series = res.data
        })
        .catch(e => {
          console.log(e.response)
        })
    },

    /**
     * Adiciona um novo registro da serie. 
     * @function
     * @name adicionarSerie
     */
    adicionarSerie() {
      this.axios.post('/nova-serie', this.serie)
        .then(res => {
          this.series.push(res.data)
          this.serie.titulo = ''
          this.serie.genero = ''
          this.serie.temporadas = ''
          this.message.color = 'success'
          this.message.texto = 'Serie adicionada com sucesso!'
          this.showAlert()
          this.fecharModalAdicionar()
        })
        .catch(e => {
          console.log(e.response)
          if(e.response.data.error.errors.titulo.message){
            this.message.texto = e.response.data.error.errors.titulo.message
          }else{
            this.message.texto = 'Não foi posivel adicionar a serie!'
          }
          this.message.color = 'danger'
          this.showAlert()
        })
    },

    /**
     * Ativa a edição de registro da serie por id. 
     * @function
     * @name ativarEdicao
     */
    ativarEdicao(id) {
      this.editar = true
      this.axios.get(`/serie/${id}`)
        .then(res => {
          this.atualizarSerie = res.data
        })
        .catch(e => {
          console.log(e.response)
        })
        this.exibirModalAtualizar()
    },

    /**
     * Edita registro de serie por id. 
     * @function
     * @name editarSerie 
     */
    editarSerie(item) {
      this.axios.put(`/serie/${item._id}`, item)
        .then(res => {
          const indice = this.series.findIndex(s => s._id === res.data._id)
          this.series[indice].titulo = res.data.titulo
          this.series[indice].genero = res.data.genero
          this.series[indice].temporadas = res.data.temporadas
          this.message.color = 'success'
          this.message.texto = 'Serie editada com sucesso!'
          this.showAlert()
          this.fecharModalAtualizar()
        })
        .catch(e => {
          console.log(e.response)
        })
    },

    /**
     * Exclui registro de serie por id. 
     * @function
     * @name excluirSerie 
     */
    excluirSerie(id){
      this.axios.delete(`serie/${id}`)
        .then(res => {
          let indice = this.series.findIndex(item => item._id === res.data._id)
          this.series.splice(indice, 1)
          this.showAlert()
          this.message.color = 'danger'
          this.message.texto = 'Serie excluida com sucesso!'
        })
        .catch(e => {
          console.log(e.response)
        })
    },
    
    /**
     * Limpa o campo de pesquisa.
     * @function 
     * @name limparCampoPesquisa 
     */
    limparCampoPesquisa() {
      this.pesquisa = ''
    },
    
    /**
     * Realiza a abertura do modal de adição de serie.
     * @function 
     * @name exibirModalAdicionar
     */
    exibirModalAdicionar() {
      this.$refs['modal-adicionar'].show()
    },

    /**
     * Realiza o fechamento do modal de adição de serie.
     * @function 
     * @name fecharModalAdicionar
     */
    fecharModalAdicionar() {
      this.$refs['modal-adicionar'].hide()
    },

    /**
     * Realiza a abertura do modal de edição de serie.
     * @function 
     * @name exibirModalAtualizar
     */
    exibirModalAtualizar() {
      this.$refs['modal-atualizar'].show()
    },

    /**
     * Realiza o fechamento do modal de edição de serie.
     * @function 
     * @name fecharModalAtualizar
     */
    fecharModalAtualizar() {
      this.$refs['modal-atualizar'].hide()
    },

    /**
     * Realiza uma contagem de exibição do alerta nas operações de manipulação de resgistros das series. 
     * @function
     * @name countDownChanged
     */
    countDownChanged(dismissCountDown) {
      this.dismissCountDown = dismissCountDown
    },

    /**
     * Efetua a exibição do alerta. 
     * @function
     * @name showAlert
     */
    showAlert() {
      this.dismissCountDown = this.dismissSecs
    }
  }
}
</script>

<style scoped>
#titulo-adicionar {
  color: #42b983;
}

#titulo-principal {
  color: #42b983;
}

#titulo-editar {
  color: blue;
}

#formulario-pesquisa, #table-series {
  margin-top: 20px;
}
</style>