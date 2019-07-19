<template>
    <section padding has-header class="friends">
        <header header>
            <a @click="$router.go(-1)">
                <img only-margin-left src="@/assets/icons/back.svg">
            </a>
            <h1>{{$t('friends.title')}}</h1>

            <img src="@/assets/icons/add.svg" @click="showAddFriendModal = true">
        </header>

        <ul v-if="user" class="friends__list">
            <router-link tag="li" :to="'/user/friends/' + friend.id" v-for="friend of friends" :key="friend.id">
                <img :src="friend.image">
                <h2> {{friend.name}}</h2>
            </router-link>
        </ul>

        <Modal v-show="showAddFriendModal">
            <div slot="body">
                <label for="friendId">{{$t('friends.friend-id')}}</label>
                <input id="friendId" type="text" v-model="friendId"/>
                <p class="friends__error" v-if="notFoundError">{{$t('friends.not-found')}}</p>
            </div>

            <template slot="buttons">
                <button secondary @click="showAddFriendModal = false">{{$t('common.cancel')}}</button>
                <button @click="addFriend()">{{$t('common.accept')}}</button>
            </template>
        </Modal>

    </section>
</template>

<script>
    import Modal from "../../components/Modal";
    import {db} from '@/firebase/init';

    export default {
        name: "Friends",
        components: {Modal},
        data() {
            return {
                showAddFriendModal: false,
                friendId: '',
                notFoundError: false
            }
        },
        computed: {
            user() {
                return this.$store.getters['auth/user'];
            },
            friends() {
                return this.$store.getters['friends/friends'];
            }
        },
        methods: {
            addFriend() {
                let friends = this.user.friends || [];
                friends.push(this.friendId);

                db.collection('users').doc(this.friendId).get().then(
                    (doc) => {
                        if (doc.exists) {
                            this.showAddFriendModal = false;
                            db.collection('users').doc(this.user.id).update({
                                friends: friends
                            })
                        } else {
                            this.notFoundError = true;
                        }
                    }).catch(() => {
                    this.notFoundError = true;
                })
            }
        }
    }
</script>

<style scoped lang="scss">
    .friends {

        input {
            margin-bottom: 0;
        }

        &__list {
            margin: 0;
            padding: 0;

            li {
                display: flex;
                align-items: center;
                padding: 16px 0;
                border-bottom: 1px solid $card-color;

                &:active {
                    opacity: 0.8;
                }

                img {
                    height: 50px;
                    margin-right: 16px;
                    border-radius: 50px;
                }
            }
        }

        &__error {
            text-align: right;
            color: $danger-color;
            margin: 8px 0;
            font-size: 14px;
        }
    }
</style>
