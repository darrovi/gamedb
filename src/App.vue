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

    export default {
        components: {SpinnerPage}
    }
</script>
