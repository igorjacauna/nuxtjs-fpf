<template>
  <v-container>
    <v-skeleton-loader type="article@3" :loading="$fetchState.pending">
      <v-row>
        <v-col>
          {{ this.post.content }}
        </v-col>
      </v-row>
    </v-skeleton-loader>
  </v-container>
</template>

<script>
export default {
  async fetch() {
    const response = await this.$axios.get(
      `http://localhost:1337/posts/${this.$route.params.post}`
    );
    this.post = response.data;
  },
  data() {
    return {
      post: {},
    };
  },
};
</script>

<style>
</style>