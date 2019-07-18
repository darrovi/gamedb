<template>
    <section padding has-header class="edit-game">
        <header header>
            <h1>{{$t('edit-game.title')}}</h1>
            <a @click="$router.go(-1)">
                <img src="@/assets/icons/close.svg">
            </a>
        </header>

        <form @submit="editGame">
            <fieldset class="edit-game__name-fieldset">
                <label required for="name">{{$t('create-game.name')}}</label>
                <input id="name" required v-model="game.name" autocomplete="off"/>
            </fieldset>

            <fieldset>
                <label for="image">{{$t('create-game.image')}}</label>
                <input id="image" v-model="game.image"/>
            </fieldset>

            <fieldset>
                <label for="description">{{$t('create-game.description')}}</label>
                <textarea id="description" v-model="game.description"></textarea>
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

            <button class="edit-game__form-button" type="submit">{{$t('edit-game.title')}}</button>
        </form>
    </section>
</template>

<script>
    import {db} from '@/firebase/init';
    import moment from 'moment'

    export default {
        name: "EditGame",
        data() {
            return {}
        },
        computed: {
            isFormValid() {
                return true
            },
            game() {
                return this.$store.getters['games/currentGame']
            }
        },
        methods: {
            editGame(e) {
                this.$store.commit('loading/start');
                this.game.updatedAt = moment().format();

                db.collection('games').doc(this.game.id).set(this.game).then(() => {
                    this.$store.commit('loading/stop');
                    this.$router.go(-1);
                });

                e.preventDefault();
            }
        }
    }
</script>

<style scoped lang="scss">
    .edit-game {

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

        &__spinner {
            height: 30px;
            width: 30px;
            display: flex;
            position: relative;
            margin: 12px auto;
        }

        &__form-button {
            float: right;
            margin: 16px 0;
        }
    }
</style>
