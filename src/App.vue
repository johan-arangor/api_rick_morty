<template>
  <v-app>
      <PxHeader :links="links" />
      <router-view />
      <PxFooter />
  </v-app>
</template>

<script>
import PxHeader from '@/components/PxHeader'
import PxFooter from '@/components/PxFooter.vue'

export default {
  name: 'app',
  components: {
    PxHeader,
    PxFooter
  },
  data() {
    return {
      links:[
        {
          title:'personajes',
          to:'personajes'
        },
        {
          title:'locaciones',
          to:'locaciones'
        },
        {
          title:'episodios',
          to:'episodios'
        }
      ]
    }
  },
};
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>