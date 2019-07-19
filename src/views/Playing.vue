<template>
    <section padding has-navbar has-header class="playing">
        <header header>
            <h1>{{$t('playing.title')}}</h1>
        </header>

        <div class="playing__no-results" v-if="!games.length">
            <img src="@/assets/imgs/no-results.png">
            <p>{{$t('playing.no-results')}}</p>
        </div>

        <GameListItem class="playing__list-item" v-bind:game="game" :canNavigate="true"
                      v-for="game in games" v-bind:key="game.id"/>

        <Navbar/>
    </section>
</template>

<script>
    import Navbar from "../components/Navbar";
    import GameListItem from "../components/GameListItem";

    export default {
        name: "Playing",
        components: {Navbar, GameListItem},
        computed: {
            games() {
                return this.$store.getters['games/playing']
            }
        }
    }
</script>

<style scoped lang="scss">
    .playing {
        &__list-item {
            &:not(:last-child) {
                margin-bottom: 16px;
            }
        }

        &__no-results {
            text-align: center;
        }
    }
</style>
