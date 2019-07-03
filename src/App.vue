<template>
    <div id="app">
        <div id="nav">
            <router-link to="/games">Library</router-link>
            <router-link to="/playing">Playing</router-link>
            <router-link to="/consoles">Consoles</router-link>
            <router-link to="/user">User</router-link>
        </div>
        <router-view/>
    </div>
</template>

<style lang="scss">
    body {
    }

    #app {
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        max-width: $body-max-width;
        margin: 0 auto;
    }
</style>
