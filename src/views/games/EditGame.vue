<template>
    <section padding has-header class="edit-game">
        <header header>
            <a @click="$router.go(-1)">
                <img only-margin-left src="@/assets/icons/back.svg">
            </a>
            <h1>{{$t('edit-game.title')}}</h1>
        </header>

        <form @submit="editGame" v-if="game">
            <fieldset>
                <label required for="name">{{$t('create-game.name')}}</label>
                <input id="name" required v-model="game.name" autocomplete="off"/>
            </fieldset>

            <div class="edit-game__image-input">
                <img :src="game.image">
                <fieldset>
                    <label for="image">{{$t('create-game.image')}}</label>
                    <input id="image" v-model="game.image"/>
                </fieldset>
            </div>

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
        created() {
            this.$store.dispatch('games/setCurrentGame', this.$route.params.id);
        },
        methods: {
            editGame(e) {
                this.$store.commit('loading/start');
                this.game.updatedAt = moment().format();
                this.game.score = Number(this.game.score);

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
        &__image-input {
            display: flex;

            img {
                height: 62px;
                width: 100px;
                object-fit: cover;
            }

            fieldset {
                padding-left: 16px;
                flex-grow: 1;
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
