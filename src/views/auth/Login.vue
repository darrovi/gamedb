<template>
    <section padding class="login">
        <h1>{{$t('login.title')}}</h1>

        <fieldset>
            <label for="email">{{$t('login.email')}}</label>
            <input type="email" id="email" v-model="user.email"/>
        </fieldset>

        <fieldset>
            <label for="password">{{$t('login.password')}}</label>
            <input type="password" id="password" v-model="user.password"/>
        </fieldset>

        {{error}}

        <button @click="login">Login</button>
        <button>
            <router-link to="/register">Register</router-link>
        </button>
    </section>
</template>

<script>
    import firebase from 'firebase'

    export default {
        name: "Login",
        data() {
            return {
                user: {
                    email: '',
                    password: ''
                },
                error: null
            }
        },
        methods: {
            login() {
                this.$store.commit('loading/start');
                this.error = null;

                firebase.auth().signInWithEmailAndPassword(this.user.email, this.user.password)
                    .then(() => {
                        this.$store.commit('loading/stop');
                        this.$router.replace('games')
                    })
                    .catch((err) => {
                        this.$store.commit('loading/stop');
                        this.error = err.message;
                    })
            }
        }
    }
</script>

<style scoped lang="scss">
    .login {
        display: flex;
        justify-content: center;
        flex-direction: column;
        height: 100vh;

        h1 {
            text-align: center;
            font-size: 30px;
            color: $primary-color;
            margin-bottom: 32px;
        }
    }
</style>
