<template>
  <v-container>
      <h1>Home</h1>
      <nuxt-link to="/about">About</nuxt-link>
      <nuxt-link to="/posts">Posts</nuxt-link>
  </v-container>
</template>
<script>
export default {
    auth: false
}
</script>