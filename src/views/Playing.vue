<template>
    <section padding has-navbar has-header class="playing">
        <header header>
            <h1>{{$t('playing.title')}}</h1>
        </header>

        <div class="playing__list-item">
            <GameListItem class="playing__list-item" v-bind:game="game" v-for="game in games" v-bind:key="game.id"/>
        </div>

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
    }
</style>
