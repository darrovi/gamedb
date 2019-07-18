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
                <!-- Play Station Network, xBox live, Nintendo ID, Steam, Battlenet, Origin -->
                <div class="user__id" v-if="user.nintendoId">
                    <img src="@/assets/icons/user-ids/nintendo.svg"/>
                    <p>{{user.nintendoId}}</p>
                    <button @click="copy(user.nintendoId, $event)">Copy</button>
                </div>

                <div class="user__id" v-if="user.playStationId">
                    <img src="@/assets/icons/user-ids/playstation.svg"/>
                    <p>{{user.playStationId}}</p>
                    <button @click="copy(user.playStationId, $event)">Copy</button>
                </div>

                <div class="user__id" v-if="user.xBoxId">
                    <img src="@/assets/icons/user-ids/xbox.svg"/>
                    <p>{{user.xBoxId}}</p>
                    <button @click="copy(user.xBoxId, $event)">Copy</button>
                </div>

                <div class="user__id" v-if="user.steamId">
                    <img src="@/assets/icons/user-ids/steam.svg"/>
                    <p>{{user.steamId}}</p>
                    <button @click="copy(user.steamId, $event)">Copy</button>
                </div>

                <div class="user__id" v-if="user.originId">
                    <img src="@/assets/icons/user-ids/origin.svg"/>
                    <p>{{user.originId}}</p>
                    <button @click="copy(user.originId, $event)">Copy</button>
                </div>

                <div class="user__id" v-if="user.battlenetId">
                    <img src="@/assets/icons/user-ids/battlenet.svg"/>
                    <p>{{user.battlenetId}}</p>
                    <button @click="copy(user.battlenetId, $event)">Copy</button>
                </div>
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

    export default {
        name: "User",
        components: {Modal, Navbar},
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
                this.$store.dispatch('auth/logout');
            },
            copy(text, event) {
                const textArea = document.createElement('textArea');
                textArea.value = text;
                document.body.appendChild(textArea);

                let range, selection;

                if (navigator.userAgent.match(/ipad|iphone/i)) {
                    range = document.createRange();
                    range.selectNodeContents(textArea);
                    selection = window.getSelection();
                    selection.removeAllRanges();
                    selection.addRange(range);
                    textArea.setSelectionRange(0, 999999);
                } else {
                    textArea.select();
                }
                document.execCommand('copy');
                document.body.removeChild(textArea);

                event.target.innerHTML = 'Copied!';
                event.target.style.color = '#c1c1c1';
                setTimeout(() => {
                    event.target.innerHTML = 'Copy';
                    event.target.style.color = '';
                }, 2000)
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

        &__id {
            display: flex;
            align-items: center;
            width: 100%;
            border-bottom: 1px solid $card-color;

            img {
                height: 16px;
                margin-right: 8px;
            }

            button {
                transition: color 0.2s ease-in-out;
                margin-left: auto;
            }
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
