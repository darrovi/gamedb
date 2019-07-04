<template>
    <section padding has-navbar>
        <h1>{{$t('consoles.title')}}</h1>

        <router-link to="/consoles/create">Create console</router-link> |
        <router-link to="/consoles/1">Console 1</router-link> |
        <router-link to="/consoles/2">Console 2</router-link> |
        <router-link to="/consoles/3">Console 3</router-link>

        <Navbar/>
    </section>
</template>

<script>
    import Navbar from "../../components/Navbar";
    export default {
        name: "Consoles",
        components: {Navbar}
    }
</script>

<style scoped>

</style>
