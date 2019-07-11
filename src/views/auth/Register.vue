<template>
    <section padding class="register">
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

        <p>{{error}}</p>

        <button @click="register">{{$t('register.new-account')}}</button>
    </section>
</template>

<script>
    import firebase from 'firebase';
    import {db} from '@/firebase/init';

    export default {
        name: "Register",
        data() {
            return {
                user: {},
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
