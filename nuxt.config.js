export default {
    router: {
        middleware: ['auth']
    },
    modules: [
        '@nuxtjs/axios',
        '@nuxtjs/auth-next'
    ],
    components: true,
    buildModules: [
        '@nuxtjs/vuetify'
    ],
    auth: {
        strategies: {
            local: {
                token: {
                    property: 'jwt'
                },
                user: {
                    property: false
                },
                endpoints: {
                    login: { url: 'http://localhost:1337/auth/local', method: 'post' },
                    user: { url: 'http://localhost:1337/users/me', method: 'get' }
                }
            }
        }
    }
}