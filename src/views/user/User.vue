<template>
    <section padding has-navbar class="user">
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

        <template v-if="user">
            <div class="user__profile-info">
                <img class="user__profile-image" v-if="user.image" :src="user.image">
                <h1>
                    {{user.name}}
                    <router-link :to="{name: 'edit-user'}">
                        <img src="@/assets/icons/edit.svg"/>
                    </router-link>

                </h1>
             <FriendCodes :user="user"/>
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
    import Navbar from "../../components/Navbar";
    import Modal from "../../components/Modal";
    import FriendCodes from "../../components/FriendCodes";

    export default {
        name: "User",
        components: {FriendCodes, Modal, Navbar},
        data() {
            return {
                showLogoutModal: false
            }
        },
        computed: {
            user() {
                return this.$store.getters['auth/user'];
            }
        },
        methods: {
            logout() {
                this.$store.dispatch('games/resetGames');
                this.$store.dispatch('consoles/resetConsoles');
                this.$store.dispatch('friends/resetFriends');
                this.$store.dispatch('auth/logout');
            }
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
