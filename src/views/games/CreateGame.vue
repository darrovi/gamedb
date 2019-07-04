<template>
    <section padding class="create-game">
        <header header>
            <h1>{{$t('create-game.title')}}</h1>
            <router-link to="/games">
                <img src="@/assets/icons/close.svg">
            </router-link>
        </header>

        <form @submit="createGame">
            <fieldset>
                <label required for="name">{{$t('create-game.name')}}</label>
                <input id="name" required v-model="name"/>
            </fieldset>

            <fieldset>
                <label required for="genre">{{$t('create-game.genre')}}</label>
                <input id="genre" required v-model="genre"/>
            </fieldset>

            <fieldset>
                <label required for="company">{{$t('create-game.company')}}</label>
                <input id="company" required v-model="company"/>
            </fieldset>

            <button class="create-game__form-button" type="submit" v-bind:disabled="!isFormValid">Enviar</button>
        </form>
    </section>
</template>

<script>
    import {db} from '@/firebase/init';

    export default {
        name: "CreateGame",
        data() {
            return {
                name: null,
                genre: null,
                company: null
            }
        },
        computed: {
            isFormValid() {
                return this.name && this.genre && this.company;
            }
        },
        methods: {
            createGame: function (e) {
                this.$store.commit('loading/start');

                const game = {
                    name: this.name,
                    genre: this.genre,
                    company: this.company
                };

                db.collection('games').add(game).then((doc) => {
                    this.$store.commit('loading/stop');
                    this.$router.push({path: '/games/' + doc.id})
                });
                e.preventDefault();
            }
        }
    }
</script>

<style scoped lang="scss">
    .create-game {
        &__form-button {
            float: right;
        }
    }
</style>
