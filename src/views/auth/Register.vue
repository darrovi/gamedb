<template>
    <section padding class="register" v-bind:style="{backgroundImage: 'url(/imgs/login-background.png)'}">
        <router-link class="register__back-button" to="/login">
            <img src="@/assets/icons/back.svg">
        </router-link>

        <h1>{{$t('register.title')}}</h1>

        <fieldset>
            <label for="name">{{$t('register.name')}}</label>
            <input type="text" id="name" v-model="user.name"/>
        </fieldset>

        <fieldset>
            <label for="email">{{$t('register.email')}}</label>
            <input type="email" id="email" v-model="user.email"/>
        </fieldset>

        <fieldset>
            <label for="password">{{$t('register.password')}}</label>
            <input type="password" id="password" v-model="user.password"/>
        </fieldset>

        <p class="register__error" v-if="error">{{error}}</p>

        <button @click="register">{{$t('register.new-account')}}</button>
    </section>
</template>

<script>
    import firebase from 'firebase';
    import {db} from '@/firebase/init';

    const DEFAULT_IMAGES_NUMBER = 2;

    export default {
        name: "Register",
        data() {
            return {
                user: {
                    email: '',
                    name: '',
                    password: ''
                },
                error: null
            }
        },
        methods: {
            register() {
                this.$store.commit('loading/start');
                this.error = null;

                firebase.auth().createUserWithEmailAndPassword(this.user.email, this.user.password)
                    .then((res) => {
                        const user = {
                            name: this.user.name,
                            email: this.user.email,
                            imageRef: '_default_' + Math.floor((Math.random() * DEFAULT_IMAGES_NUMBER)) + '.png',
                            userId: res.user.uid
                        };
                        db.collection('users').add(user)
                            .then(() => {
                                firebase.auth().signInWithEmailAndPassword(this.user.email, this.user.password)
                                    .then(() => {
                                        this.$store.commit('loading/stop');
                                        this.$router.replace('games')
                                    });
                            })
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
    .register {
        padding-top: 100px;
        height: 100vh;
        box-sizing: border-box;
        display: flex;
        flex-direction: column;
        background-size: cover;
        background-position: center;

        &__back-button {
            position: absolute;
            top: 16px;
            left: 16px;
        }

        h1 {
            text-align: center;
            font-size: 30px;
            color: $primary-color;
            margin-bottom: 16px;
        }

        &__error {
            color: $danger-color;
            margin-bottom: 16px;
            font-size: 14px;
        }
    }
</style>
