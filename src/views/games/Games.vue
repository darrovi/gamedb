<template>
    <section padding has-navbar has-header class="games">
        <header header v-bind:class="{ searching: searching }">
            <h1>{{$t('games.title')}}</h1>

            <input id="searchInput" @input="search($event.target.value)" @keyup.esc="toggleSearch" v-model="filter.name"
                   type="text" placeholder="Buscar...">

            <img v-bind:src="'/icons/' + (searching ? 'close.svg': 'search.svg')" @click="toggleSearch">

            <router-link v-if="!searching" to="/games/create">
                <img src="@/assets/icons/add.svg">
            </router-link>
            <img v-else src="@/assets/icons/filter.svg" @click="toggleFilters">
        </header>

        <GamesFilter v-bind:filter="filter" v-show="showFilters" v-on:close="toggleFilters" v-on:filter="onFilter()"/>

        <div class="games__list">
            <GameListItem class="games__list-item" v-bind:game="game" v-for="game in games" v-bind:key="game.id"/>
        </div>

        <Navbar/>
    </section>
</template>

<script>
    import Navbar from "../../components/Navbar";
    import GameListItem from "../../components/GameListItem";
    import GamesFilter from "../../components/GamesFilter";

    export default {
        name: "Games",
        components: {GamesFilter, GameListItem, Navbar},
        computed: {
            games() {
                return this.$store.getters['games/filtered']
            }
        },
        data() {
            return {
                searching: false,
                showFilters: false,
                filter: {}
            }
        },
        methods: {
            toggleSearch() {
                this.searching = !this.searching;
                if (this.searching) {
                    document.getElementById('searchInput').focus();
                } else {
                    document.getElementById('searchInput').blur();
                    this.filter = {};
                    this.$store.dispatch('games/filterGames', this.filter);
                }
            },
            search(value) {
                this.filter.name = value;
                this.$store.dispatch('games/filterGames', this.filter);
            },
            toggleFilters() {
                this.showFilters = !this.showFilters;
            },
            onFilter() {
                this.showFilters = false;
                // this.filter = {...this.filter, ...filter};
                this.$store.dispatch('games/filterGames', this.filter);
            }
        }
    }
</script>

<style scoped lang="scss">

    [header] {
        input {
            transition: all 0.3s ease-in-out;
            width: 0;
            padding: 0;
            margin: 0;
            opacity: 0;
        }

        h1 {
            transition: all 0.3s ease-in-out;
            width: inherit;
            opacity: 1;
        }
    }

    .searching {
        h1 {
            width: 0;
            overflow: hidden;
            opacity: 0;
        }

        input {
            width: inherit;
            opacity: 1;
        }
    }

    .games {
        &__list-item {
            &:not(:last-child) {
                margin-bottom: 16px;
            }
        }
    }
</style>
