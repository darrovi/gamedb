<template>
    <div id="app">
        <router-view/>
        <SpinnerPage/>
    </div>
</template>

<style lang="scss">
    #app {
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        max-width: $body-max-width;
        margin: 0 auto;
    }
</style>
<script>
    import SpinnerPage from "./components/SpinnerPage";
    import firebase from 'firebase'

    export default {
        components: {SpinnerPage},
        created() {
            firebase.auth().onAuthStateChanged((user) => {
                if (user) {
                    this.$store.dispatch('auth/setUser', user.uid);
                    this.$store.dispatch('games/getGames', user.uid);
                    this.$store.dispatch('consoles/getConsoles', user.uid);
                } else {
                    console.log('User is not logged in.');
                    this.$router.replace('login');
                }
            });
        }
    }
</script>
