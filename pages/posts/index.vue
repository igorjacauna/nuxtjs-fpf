<template>
  <v-container>
    <h1>Posts</h1>
    <v-row>
      <v-col cols="12" md="4" v-for="post of posts" :key="post.id">
        <v-card>
          <v-card-title>
            {{ post.title }}
          </v-card-title>
          <v-divider></v-divider>
          <v-card-actions>
            <v-btn color="primary" :to="`/posts/${post.id}`"> Ler mais </v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  async fetch() {
    const response = await this.$axios.get("http://localhost:1337/posts");
    this.posts = response.data;
    this.renderFrom = !process.client ? "server" : "client";
  },
  data() {
    return {
      posts: [],
      renderFrom: "client",
    };
  },
};
</script>

<style>
</style>