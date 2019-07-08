<template>
    <section padding has-header class="create-game">
        <header header>
            <h1>{{$t('create-game.title')}}</h1>
            <router-link to="/games">
                <img src="@/assets/icons/close.svg">
            </router-link>
        </header>

        <form @submit="createGame">
            <fieldset class="create-game__name-fieldset">
                <label required for="name">{{$t('create-game.name')}}</label>
                <input @keydown="onNameInput" id="name" required v-model="game.name" autocomplete="off"/>
                <ul>
                    <li v-for="game in possibleGames" v-bind:key="game.id" @click="selectGame(game)">{{game.name}}
                        ({{game.released}})
                    </li>
                </ul>
            </fieldset>

            <fieldset>
                <label for="image">{{$t('create-game.image')}}</label>
                <input id="image" v-model="game.image"/>
            </fieldset>

            <fieldset>
                <label for="description">{{$t('create-game.description')}}</label>
                <input id="description" v-model="game.description"/>
            </fieldset>

            <fieldset>
                <label for="releaseDate">{{$t('create-game.release-date')}}</label>
                <input id="releaseDate" type="date" v-model="game.releaseDate"/>
            </fieldset>

            <fieldset>
                <label for="originalPlatform">{{$t('create-game.original-platform')}}</label>
                <input id="originalPlatform" v-model="game.originalPlatform"/>
            </fieldset>

            <fieldset>
                <label for="publishers">{{$t('create-game.publishers')}}</label>
                <input id="publishers" v-model="game.publishers"/>
            </fieldset>

            <fieldset>
                <label for="developers">{{$t('create-game.developers')}}</label>
                <input id="developers" v-model="game.developers"/>
            </fieldset>

            <fieldset>
                <label for="genres">{{$t('create-game.genres')}}</label>
                <input id="genres" v-model="game.genres"/>
            </fieldset>

            <fieldset>
                <label for="serie">{{$t('create-game.serie')}}</label>
                <input id="serie" v-model="game.serie"/>
            </fieldset>

            <fieldset>
                <label for="score">{{$t('create-game.score')}}</label>
                <input id="score" type="number" min="0" max="100" v-model="game.score"/>
            </fieldset>

            <button class="create-game__form-button" type="submit">{{$t('create-game.title')}}</button>
        </form>
    </section>
</template>

<script>
    import {db} from '@/firebase/init';
    import axios from 'axios';

    export default {
        name: "CreateGame",
        data() {
            return {
                game: {},
                possibleGames: []
            }
        },
        computed: {
            isFormValid() {
                return true
            }
        },
        methods: {
            selectCustomGame() {
                this.game = {};
            },
            onNameInput(event) {
                if (event.key === 'Enter') {
                    this.searchPossibleGames();
                    event.preventDefault();
                } else {
                    this.possibleGames = [];
                }

            },
            searchPossibleGames() {
                axios
                    .get('https://api.rawg.io/api/games?page_size=15&search=' + this.game.name)
                    .then(res => {
                        this.possibleGames = res.data.results
                    })
            },
            selectGame(game) {
                axios
                    .get('https://api.rawg.io/api/games/' + game.slug)
                    .then(res => {
                        this.game = {
                            name: res.data.name,
                            description: res.data.description,
                            genres: res.data.genres.map(g => g.name).join(', '),
                            releaseDate: res.data.released,
                            originalPlatform: res.data.platforms.map(p => p.platform.name).join(', '),
                            image: res.data.background_image,
                            publishers: res.data.publishers.map(p => p.name).join(', '),
                            developers: res.data.developers.map(d => d.name).join(', ')
                        };
                    })

            },
            createGame(e) {
                this.$store.commit('loading/start');
                this.game.createdAt = new Date();
                this.game.updatedAt = new Date();
                this.game.completed = false;
                this.game.playing = false;

                db.collection('games').add(this.game).then((doc) => {
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

        &__name-fieldset {
            position: relative;

            ul {
                width: 100%;
                max-height: 0;
                background: $card-color;
                overflow: auto;
                position: absolute;
                top: 59px;
                z-index: 100;
                box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.5);
                border-bottom-left-radius: 6px;
                border-bottom-right-radius: 6px;
                transition: max-height 0.2s ease-in-out;
                padding: 0 12px;
                box-sizing: border-box;

                li {
                    padding: 12px 0;
                    border-bottom: 1px solid #2A2A2A;
                    font-size: 14px;
                }
            }

            &:focus-within {
                ul {
                    max-height: 200px;
                }
            }
        }

        &__form-button {
            float: right;
        }
    }
</style>
