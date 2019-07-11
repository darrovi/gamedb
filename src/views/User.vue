<template>
    <section padding has-navbar>
        <h1>{{$t('user.title')}}</h1>

        <button @click="logout">LOGOUT</button>

        <Navbar/>
    </section>
</template>

<script>
    import Navbar from "../components/Navbar";
    import firebase from "firebase"

    export default {
        name: "User",
        components: {Navbar},
        methods: {
            logout() {
                firebase.auth().signOut();
                this.$router.replace('login');
            }
        }
    }
</script>

<style scoped>

</style>
