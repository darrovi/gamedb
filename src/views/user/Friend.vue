<template>
    <section padding has-header class="friend">
        <template v-if="friend">
            <header header>
                <img class="friend__profile-image" v-if="friend.image" :src="friend.image">
                <h1>{{friend.name}}</h1>
                <a @click="$router.go(-1)">
                    <img src="@/assets/icons/close.svg">
                </a>
            </header>

            <div class="friend__profile-info">

                <h2 class="friend__subtitle">{{$t('friend.codes')}}</h2>
                <FriendCodes :user="friend"/>

                <h2 class="friend__subtitle">{{$t('friend.games')}}</h2>
                <GameListItem class="friend__list-item" v-bind:game="game" :canNavigate="false"
                              v-for="game in friend.games" v-bind:key="game.id"/>
            </div>
        </template>
    </section>
</template>

<script>
    import FriendCodes from "../../components/FriendCodes";
    import GameListItem from "../../components/GameListItem";

    export default {
        name: "Friend",
        components: {GameListItem, FriendCodes},
        computed: {
            friend() {
                return this.$store.getters['friends/currentFriend']
            }
        },
        created() {
            this.$store.dispatch('friends/setCurrentFriend', this.$route.params.id);
        }
    }
</script>

<style scoped lang="scss">
    .friend {
        &__profile-info {
            display: flex;
            flex-direction: column;
            align-items: center;

            .friend-codes {
                margin-bottom: 32px;
            }
        }

        &__profile-image {
            height: 30px;
            width: 30px;
            border-radius: 100%;
            margin-right: 16px;
        }

        &__subtitle {
            margin-bottom: 16px;
            align-self: flex-start;
        }

        &__list-item {
            &:not(:last-child) {
                margin-bottom: 16px;
            }
        }
    }
</style>
