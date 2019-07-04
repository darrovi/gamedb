<template>
    <section padding has-navbar class="games">
        <h1>{{$t('games.title')}}</h1>

        <router-link to="/games/create">Create game</router-link>

        <div class="games__list">
            <GameListItem v-bind:game="game" v-for="game in [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]" v-bind:key="game"/>
        </div>

        <Navbar/>

    </section>
</template>

<script>
    import Navbar from "../../components/Navbar";
    import GameListItem from "../../components/GameListItem";

    export default {
        name: "Games",
        components: {GameListItem, Navbar},
        mounted: function() {
            this.$store.commit('loading/start');
            setTimeout(() => this.$store.commit('loading/stop'), 1000);
        }
    }
</script>

<style scoped lang="scss">
    .games {
        &__list {
            margin-top: 32px;

            > :not(:last-child) {
                margin-bottom: 16px;
            }
        }
    }
</style>
