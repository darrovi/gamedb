<template>
    <section padding has-navbar has-header class="games">
        <header header>
            <h1>{{$t('games.title')}}</h1>
            <img src="@/assets/icons/search.svg">
            <router-link to="/games/create">
                <img src="@/assets/icons/add.svg">
            </router-link>
        </header>

        <div class="games__list">
            <GameListItem class="games__list-item" v-bind:game="game" v-for="game in games" v-bind:key="game.id"/>
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
        &__list-item {
            animation-name: fadeIn;
            animation-duration: 0.3s;
            animation-timing-function: ease-in-out;
            animation-fill-mode: both;

            &:not(:last-child) {
                margin-bottom: 16px;
            }

            @for $i from 1 through 50 {
                &:nth-child(#{$i}n) {
                    animation-delay: #{$i * 0.1}s;
                }
            }
        }
    }

    @keyframes fadeIn {
        from {
            opacity: 0;
            transform: scale(0.5);
        }
        to {
            opacity: 1;
            transform: scale(1);
        }
    }

</style>
