<template>
    <section padding class="login" v-bind:style="{backgroundImage: 'url(/imgs/login-background.png)'}">
        <!-- TODO logo de la app-->
        <h1>GameDB</h1>

        <fieldset>
            <label for="email">{{$t('login.email')}}</label>
            <input type="email" id="email" v-model="user.email"/>
        </fieldset>

        <fieldset>
            <label for="password">{{$t('login.password')}}</label>
            <input type="password" id="password" v-model="user.password"/>
        </fieldset>

        <a class="login__forgot" @click="forgotPassword">{{$t('login.forgot-password')}}</a>

        <p class="login__error" v-if="error">{{error}}</p>

        <div class="login__button">
            <button @click="login">{{$t('login.login')}}</button>
        </div>

        <!--<div class="login__others">-->
            <!--<p>{{$t('login.or')}}</p>-->
        <!--</div>-->

        <p class="login__register">{{$t('login.no-account')}}
            <router-link to="/register">{{$t('login.create-one')}}</router-link>
        </p>
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
            },
            forgotPassword() {
                this.$store.commit('loading/start');
                firebase.auth().sendPasswordResetEmail(this.user.email)
                    .then(() => {
                        this.$store.commit('loading/stop');
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
        padding-top: 100px;
        height: 100vh;
        box-sizing: border-box;
        display: flex;
        flex-direction: column;
        background-size: cover;
        background-position: center;

        h1 {
            text-align: center;
            font-size: 30px;
            color: $primary-color;
            margin-bottom: 16px;
        }

        label {
            margin-bottom: 0;
        }

        input {
            margin-bottom: 16px;
        }

        &__forgot {
            opacity: 0.6;
            font-size: 14px;
            width: fit-content;
        }

        &__others {
            text-align: center;
            padding: 16px;
            border-radius: 6px;
            background-color: $card-color;
            box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.5);
            margin-top: 16px;

            p {
                font-size: 14px;
            }
        }

        &__error {
            text-align: right;
            color: $danger-color;
            margin: 8px 0;
            font-size: 14px;
        }

        &__button {
            text-align: right;
        }

        &__register {
            font-size: 14px;
            margin-top: auto;
        }
    }
</style>
