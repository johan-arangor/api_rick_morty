<template>
    <v-app-bar
    absolute
    color="#2A2625"
    dark
    >
        <v-tabs align-with-title>
            <router-link to="/">
                <v-img
                alt="Logo"
                class="shrink rounded-circle "
                contain
                src="@/assets/logo.png"
                transition="scale-transition"
                width="90"
                :to="{ name: 'home' }"
                />
            </router-link>
            <router-link
            v-for="l in links"
            :key="l.title"
            :to="l.to"
            class="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4"
            >
                <v-tab>
                    {{ l.title }}
                </v-tab>
            </router-link>
        </v-tabs>
        <v-spacer></v-spacer>
        <v-btn
        href="https://rickandmortyapi.com"
        target="_blank"
        text
        >
            <span class="mr-2">Rick And Morty Api</span>
            <v-icon>mdi-open-in-new</v-icon>
        </v-btn>
    </v-app-bar>
</template>

<script>
export default {
  name:"PxHeader",
  props: {
    links:{
      type: Array,
      default: () => {}
    }
  }
}
</script>