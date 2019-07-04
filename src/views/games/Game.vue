<template>
    <section padding>
        <header header>
            <h1>{{game.name}}</h1>
            <router-link to="/games">
                <img src="@/assets/icons/close.svg">
            </router-link>
        </header>

        <p>{{game}}</p>
    </section>
</template>

<script>
    export default {
        name: "Game",
        computed: {
            game() {
                return this.$store.getters['games/currentGame']
            }
        },
        created() {
            this.$store.dispatch('games/setCurrentGame', this.$route.params.id);
        }
    }
</script>

<style scoped>

</style>
