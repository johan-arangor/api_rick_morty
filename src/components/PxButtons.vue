<template>
    <div class="about">
        <div class="mt-3">
            <v-row dense>
                <v-col cols="6">
                    <h1>Pagina {{ pagina }} de {{ paginas }}</h1>
                </v-col>
                <v-col cols="6">
                    <h1>Total: {{ cantidad }}</h1>
                </v-col>
                <v-col cols="12">
                    <v-btn 
                    @click="anterior"
                    color="primary"
                    depressed
                    >
                        <v-icon left>
                            mdi-arrow-left
                        </v-icon>
                        Anterior
                    </v-btn>
                    <v-btn 
                    @click="inicio"
                    color="orange darken-2"
                    depressed
                    >
                        <v-icon rigth>
                            mdi-home
                        </v-icon>
                        Inicio
                    </v-btn>
                    <v-btn
                    @click="siguiente"
                    color="primary"
                    depressed
                    >
                        Siguiente
                        <v-icon right>
                            mdi-arrow-right
                        </v-icon>
                    </v-btn>
                </v-col>
            </v-row>
        </div>
    </div>
</template>

<script>
export default {
    name: 'buttons',

    props:{
        cantidad: {
            type: Number,
            required: true
        },
        paginas: {
            type: Number,
            required: true
        },
        pagina: {
            type: Number,
            required: true,
            default: 1
        }
    },
    methods: {
        inicio(){
            this.$emit('loadPage', 1)
        },
        anterior(){
            if (this.pagina > 1 && this.pagina < this.paginas) {
                this.$emit('loadPage', this.pagina - 1)
            }
        },
        siguiente(){
            if (this.pagina >= 1 && this.pagina < this.paginas) {
                this.$emit('loadPage', this.pagina + 1)
            }
        }    
    }
}
</script>