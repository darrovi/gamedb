<template>
    <section padding has-navbar class="games">
        <header header>
            <h1>{{$t('games.title')}}</h1>
            <img src="@/assets/icons/search.svg">
            <router-link to="/games/create">
                <img src="@/assets/icons/add.svg">
            </router-link>
        </header>

        <div class="games__list">
            <GameListItem v-bind:game="game" v-for="game in games" v-bind:key="game.id"/>
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
        computed: {
            games() {
                return this.$store.getters['games/all']
            }
        }
    }
</script>

<style scoped lang="scss">
    .games {
        &__list {
            > :not(:last-child) {
                margin-bottom: 16px;
            }
        }
    }
</style>
