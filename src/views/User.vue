<template>
    <section padding has-navbar>
        <h1>{{$t('user.title')}}</h1>

        <router-link to="/login">Logout (to login)</router-link>

        <Navbar/>
    </section>
</template>

<script>
    import Navbar from "../components/Navbar";
    export default {
        name: "User",
        components: {Navbar}
    }
</script>

<style scoped>

</style>
