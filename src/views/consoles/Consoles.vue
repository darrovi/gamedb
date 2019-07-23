<template>
    <section padding has-navbar has-header class="consoles">
        <header header>
            <h1>{{$t('consoles.title')}}</h1>

            <router-link to="/consoles/create">
                <img src="@/assets/icons/add.svg">
            </router-link>
        </header>

        <div v-if="loadingConsoles">{{$t('consoles.loading')}}</div>

        <template v-else>
            <ConsoleListItem class="consoles__list-item" v-for="console in consoles" :key="console.id"
                             :console="console"></ConsoleListItem>
        </template>

        <Navbar/>
    </section>
</template>

<script>
    import Navbar from "../../components/Navbar";
    import ConsoleListItem from "../../components/ConsoleListItem";

    export default {
        name: "Consoles",
        components: {ConsoleListItem, Navbar},
        computed: {
            consoles() {
                return this.$store.getters['consoles/all']
            },
            loadingConsoles() {
                return this.$store.getters['consoles/loadingConsoles']
            }
        }
    }
</script>

<style scoped lang="scss">
    .consoles {
        &__list-item {
            &:not(:last-child) {
                margin-bottom: 16px;
            }
        }

    }
</style>
