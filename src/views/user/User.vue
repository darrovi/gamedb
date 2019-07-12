<template>
    <section padding class="user">
        <template v-if="user">
            <div class="user__header">
                <img @click="showLogoutModal = true" src="@/assets/icons/logout.svg"/>

                <Modal v-show="showLogoutModal">
                    <h2 slot="header">{{$t('user.logout')}}</h2>
                    <p slot="body">{{$t('user.logout-description')}}</p>
                    <template slot="buttons">
                        <button secondary @click="showLogoutModal = false">{{$t('common.cancel')}}</button>
                        <button @click="logout">{{$t('user.logout')}}</button>
                    </template>
                </Modal>
            </div>

            <div class="user__profile-info">
                <img class="user__profile-image" v-if="image" :src="image">
                <h1>
                    {{user.name}}
                    <router-link :to="{name: 'edit-user'}">
                        <img src="@/assets/icons/edit.svg"/>
                    </router-link>
                </h1>
                <h3>{{user.email}}</h3>
            </div>

            <div class="user__buttons">
                <router-link :to="{name: 'statistics'}">
                    <button>
                        <img src="@/assets/icons/statistics.svg"/>
                        {{$t('user.statistics')}}
                    </button>
                </router-link>
                <router-link :to="{name: 'friends'}">
                    <button>
                        <img src="@/assets/icons/friends.svg"/>
                        {{$t('user.friends')}}
                    </button>
                </router-link>
            </div>
        </template>
        <Navbar/>
    </section>
</template>

<script>
    import {db} from '@/firebase/init';
    import Navbar from "../../components/Navbar";
    import firebase from "firebase"
    import Modal from "../../components/Modal";

    export default {
        name: "User",
        components: {Modal, Navbar},
        data() {
            return {
                user: {},
                image: '',
                showLogoutModal: false
            }
        },
        methods: {
            logout() {
                this.$store.dispatch('games/resetGames');
                firebase.auth().signOut();
                this.$router.replace('login');
            }
        },
        mounted() {
            db.collection('users').where('userId', '==', firebase.auth().currentUser.uid).get()
                .then((snapshot) => {
                    snapshot.forEach((doc) => {
                        this.user = doc.data();
                        firebase.storage().ref('users/' + this.user.imageRef).getDownloadURL().then((url) => this.image = url)
                    });
                });
        }
    }
</script>

<style scoped lang="scss">
    .user {
        &__header {
            display: flex;

            > img {
                margin-left: auto;
            }
        }

        &__profile-info {
            display: flex;
            flex-direction: column;
            align-items: center;

            h1 {
                margin: 16px 0;
                display: flex;

                a {
                    display: flex;
                    margin-left: 8px;
                }
            }
        }

        &__profile-image {
            height: 200px;
            width: 200px;
            border-radius: 100%;
            margin: 16px 0;
        }

        &__buttons {
            display: flex;
            justify-content: space-around;
            margin-top: 32px;

            a {
                flex: 0 0 50%;
                margin: 4px;
                text-decoration: none;

                button {
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    width: 100%;
                }

                img {
                    fill: $primary-color;
                    height: 50px;
                    margin-bottom: 8px;
                }

                p {
                    text-align: center;
                    font-size: 14px;
                }
            }
        }
    }
</style>
