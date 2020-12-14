<template>
  <v-app>
      <v-app-bar app>
          NuxtJS
          <v-spacer></v-spacer>
          <v-btn v-if="$auth.loggedIn" text @click="$auth.logout()">
              Sair
          </v-btn>
      </v-app-bar>
      <v-main>
          <nuxt></nuxt>
      </v-main>
      <v-footer>
          Copyright {{ new Date().getFullYear() }}
      </v-footer>
  </v-app>
</template>

<script>
export default {

}
</script>

<style>

</style>