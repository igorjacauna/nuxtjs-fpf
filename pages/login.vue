<template>
  <v-container class="pt-10">
      <form @submit.prevent="login">
        <my-input v-model="loginData.identifier" />
        <my-input v-model="loginData.password" />
        <button type="submit">Logar</button>
      </form>
  </v-container>
</template>

<script>
export default {
    data() {
        return {
            loginData: {
                identifier: '',
                password: ''
            }
        }
    },
    methods: {
        login() {
            this.$auth.loginWith('local', {
                data: {
                    identifier: this.loginData.identifier,
                    password: this.loginData.password
                }
            })
        }
    }
}
</script>

<style>

</style>