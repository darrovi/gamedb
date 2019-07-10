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
