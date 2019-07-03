<template>
    <section padding has-navbar>
        <h1>GAMES</h1>

        <router-link to="/games/create">Create game</router-link> |
        <router-link to="/games/1">Game 1</router-link> |
        <router-link to="/games/2">Game 2</router-link> |
        <router-link to="/games/3">Game 3</router-link>

        <Navbar/>
    </section>
</template>

<script>
    import Navbar from "../../components/Navbar";
    export default {
        name: "Games",
        components: {Navbar}
    }
</script>

<style scoped>

</style>
