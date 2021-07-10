<template>
    <div class="about">
        <h1>PERSONAJES</h1>
        <div>
            <buttons :cantidad="cantidad" :paginas="paginas" :pagina="pagina" @loadPage="getPage"/>
        </div>
        <div class="ma-3">
            <v-row dense>
                <v-col
                v-for="(item, i) in lista" :key="i" cols="4">
                    <v-card color="dark" dark class="xs-12 sm-12 lg-6 xl-6">
                        <div class="d-flex flex-no-wrap justify-space-between">
                            <v-avatar class="ma-3" size="125" tile>
                                <v-img :src="item.image"></v-img>
                            </v-avatar>
                            <div>
                                <v-btn @click="openDetails(item.url)" target="_blank">
                                    <v-card-title class="text-h5" v-text="item.name"></v-card-title>
                                </v-btn>
                                <div class="light-green--text ms-4">
                                    Episodios: {{ item.episode.length }}
                                </div>
                                <div class="light-green--text ms-4">
                                    Especie: {{ item.species }}
                                </div>
                                <div class="light-green--text ms-4">
                                    Estado: {{ item.status }}
                                </div>                     
                                <div class="light-green--text ms-4">
                                    Origen: {{ item.origin.name }}
                                </div>
                                <div class="light-green--text ms-4">
                                    Localización: {{ item.location.name }}
                                </div>
                            </div>
                        </div>
                    </v-card>
                </v-col>
            </v-row>
        </div>
        <div>
        </div>
    </div>
</template>

<script>

import api from '@/api'
import buttons from '@/components/PxButtons'

export default {
  name: 'personajes',

  data() {
    return {
      lista: [],
      arrayDetalle: {},
      cantidad: 0,
      paginas: 0,
      pagina: 1,
      newPage: '',
      url: '',
      dialog: false
    }
  },
  components: {
    buttons
  },
  methods: {
    getPage(page){
      this.newPage = 'character/?page=' + page
      Promise.all([
        api.getAll(this.newPage)
      ])
      .then((dataArray) => {
        this.dataArray = dataArray
        this.lista = dataArray[0].data.results
        this.cantidad = dataArray[0].data.info.count
        this.paginas = dataArray[0].data.info.pages
        this.pagina = page
      })
    },
    openDetails(url){
      this.url = url
      this.dialog = true
    },
  },
  created(){
    this.getPage(this.pagina)
  }
}
</script>
