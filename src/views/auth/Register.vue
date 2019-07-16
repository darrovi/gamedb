<template>
    <section padding class="register" v-bind:style="{backgroundImage: 'url(/imgs/login-background.png)'}">
        <router-link class="register__back-button" to="/login">
            <img src="@/assets/icons/back.svg">
        </router-link>

        <h1>{{$t('register.title')}}</h1>

        <ProfileImagePicker @selectedImage="onSelectedImage"/>
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

        <h2>{{$t('register.add-codes')}}</h2>

        <fieldset>
            <label for="nintendoId">{{$t('register.nintendo-id')}}</label>
            <input type="text" id="nintendoId" v-model="user.nintendoId"/>
        </fieldset>

        <fieldset>
            <label for="playStationId">{{$t('register.play-station-id')}}</label>
            <input type="text" id="playStationId" v-model="user.playStationId"/>
        </fieldset>

        <fieldset>
            <label for="xBoxId">{{$t('register.x-box-id')}}</label>
            <input type="text" id="xBoxId" v-model="user.xBoxId"/>
        </fieldset>

        <fieldset>
            <label for="steamId">{{$t('register.steam-id')}}</label>
            <input type="text" id="steamId" v-model="user.steamId"/>
        </fieldset>

        <fieldset>
            <label for="originId">{{$t('register.origin-id')}}</label>
            <input type="text" id="originId" v-model="user.originId"/>
        </fieldset>

        <fieldset>
            <label for="battlenetId">{{$t('register.battlenet-id')}}</label>
            <input type="text" id="battlenetId" v-model="user.battlenetId"/>
        </fieldset>

        <p class="register__error" v-if="error">{{error}}</p>

        <button @click="register">{{$t('register.new-account')}}</button>
    </section>
</template>

<script>
    import firebase from 'firebase';
    import {db} from '@/firebase/init';
    import ProfileImagePicker from "../../components/ProfileImagePicker";
    import {DEFAULT_IMAGES_NUMBER} from '@/constants'

    export default {
        name: "Register",
        components: {ProfileImagePicker},
        data() {
            return {
                user: {
                    email: '',
                    name: '',
                    password: '',
                    selectedImage: ''
                },
                error: null
            }
        },
        methods: {
            onSelectedImage(ref) {
                this.selectedImage = ref;
            },
            register() {
                this.$store.commit('loading/start');
                this.error = null;

                firebase.auth().createUserWithEmailAndPassword(this.user.email, this.user.password)
                    .then((res) => {
                        const user = {
                            name: this.user.name,
                            email: this.user.email,
                            imageRef: this.selectedImage || 'defaults/' + Math.floor((Math.random() * DEFAULT_IMAGES_NUMBER)) + '.png',
                            userId: res.user.uid,
                            nintendoId: this.user.nintendoId || '',
                            playStationId: this.user.playStationId || '',
                            xBoxId: this.user.xBoxId || '',
                            steamId: this.user.steamId || '',
                            originId: this.user.originId || '',
                            battlenetId: this.user.battlenetId || ''
                        };
                        db.collection('users').add(user)
                            .then(() => {
                                firebase.auth().signInWithEmailAndPassword(this.user.email, this.user.password)
                                    .then(() => {
                                        this.$store.commit('loading/stop');
                                        this.$router.replace('games')
                                    });
                            })
                            .catch((err) => {
                                this.$store.commit('loading/stop');
                                this.error = err.message;
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

        h2 {
            margin: 32px 0;
        }

        &__error {
            color: $danger-color;
            margin-bottom: 16px;
            font-size: 14px;
        }
    }
</style>
