<template>
    <section class="game" v-if="game" @scroll="onScroll">
        <header class="game__header">
            <h1>{{game.name}}</h1>
            <router-link to="/games">
                <img src="@/assets/icons/close--white.svg">
            </router-link>

            <div id="game-image" class="game__image" v-bind:style="{ backgroundImage: 'url(' + game.image + ')' }">
                <div class="game__image-gradient"></div>
            </div>

        </header>

        <div class="game__content" padding>
            <h2>Información</h2>

            <div class="game__description" id="game-description">
                <p v-html="game.description"></p>

                <button @click="viewMoreDescription" class="game__more-description">
                    <img src="@/assets/icons/more-arrow.svg">
                </button>
            </div>

            <div class="game__box">
                <div>
                    <p class="game__label">{{$t('create-game.release-date')}}</p>
                    <p>{{game.releaseDate || '---'}}</p>
                </div>
                <div>
                    <p class="game__label">{{$t('create-game.original-platform')}}</p>
                    <p>{{game.originalPlatform || '---'}}</p>
                </div>
            </div>

            <div class="game__box">
                <div>
                    <p class="game__label">{{$t('create-game.publishers')}}</p>
                    <p>{{game.publishers || '---'}}</p>
                </div>
                <div>
                    <p class="game__label">{{$t('create-game.developers')}}</p>
                    <p>{{game.developers || '---'}}</p>
                </div>
            </div>

            <div class="game__box">
                <div>
                    <p class="game__label">{{$t('create-game.genres')}}</p>
                    <p>{{game.genres || '---'}}</p>
                </div>
            </div>

            <div class="game__box">
                <div>
                    <p class="game__label">{{$t('create-game.serie')}}</p>
                    <p>{{game.serie || '---'}}</p>
                </div>
                <div>
                    <p class="game__label">{{$t('create-game.score')}}</p>
                    <p>{{game.score || '---'}}</p>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
    const SCROLL_CONTENT_MARGIN_TOP = 136;
    const IMAGE_SIZE = 200;
    export default {
        name: "Game",
        computed: {
            game() {
                return this.$store.getters['games/currentGame']
            }
        },
        created() {
            this.$store.dispatch('games/setCurrentGame', this.$route.params.id);
        },
        mounted() {
            document.addEventListener('scroll', this.onScroll)
        },
        destroyed() {
            document.removeEventListener('scroll', this.onScroll)
        },
        methods: {
            onScroll() {
                const imageEl = document.getElementById('game-image');
                if (window.scrollY < SCROLL_CONTENT_MARGIN_TOP) {
                    imageEl.style.height = (IMAGE_SIZE - window.scrollY) + 'px';
                } else {
                    imageEl.style.height = IMAGE_SIZE - SCROLL_CONTENT_MARGIN_TOP + 'px';
                }
            },
            viewMoreDescription(event) {
                document.getElementById('game-description').style.maxHeight = document.getElementById('game-description').scrollHeight + 'px';
                event.target.remove();
            }
        }
    }
</script>

<style scoped lang="scss">
    .game {
        &__header {
            display: flex;
            width: 100%;
            padding: 16px;
            box-sizing: border-box;
            z-index: 900;
            position: fixed;
            top: 0;
            left: 0;

            h1 {
                margin-right: auto;
                overflow: hidden;
                text-overflow: ellipsis;
                white-space: nowrap;
            }

            a {
                display: flex;
            }

            img {
                margin-left: 16px;

                &:active {
                    opacity: 0.5;
                }
            }
            background: transparent;

            h1, img {
                text-shadow: 0 0 4px black;
                color: white;
            }
        }

        &__image {
            width: 100%;
            height: 200px;
            background-size: cover;
            background-position: center;
            position: absolute;
            top: 0;
            right: 0;
            z-index: -1;
        }

        &__image-gradient {
            height: 100%;
            width: 100%;
            background: -moz-linear-gradient(top, rgba(0, 0, 0, 0) 0%, $background-color 90%, $background-color 100%);
            background: -webkit-gradient(left top, left bottom, color-stop(0%, rgba(0, 0, 0, 0)), color-stop(90%, $background-color), color-stop(100%, $background-color));
            background: -webkit-linear-gradient(top, rgba(0, 0, 0, 0) 0%, $background-color 90%, $background-color 100%);
            background: -o-linear-gradient(top, rgba(0, 0, 0, 0) 0%, $background-color 90%, $background-color 100%);
            background: -ms-linear-gradient(top, rgba(0, 0, 0, 0) 0%, $background-color 90%, $background-color 100%);
            background: linear-gradient(to bottom, rgba(0, 0, 0, 0) 0%, $background-color 90%, $background-color 100%);
            filter: progid:DXImageTransform.Microsoft.gradient(startColorstr='#000000', endColorstr='#000000', GradientType=0);
        }

        &__content {
            // Tamaño de imagen menos tamaño del header
            margin-top: calc(136px + 62px);
        }

        &__description {
            max-height: 78px;
            overflow: hidden;
            position: relative;
            transition: max-height 0.3s ease-in-out;
        }

        &__more-description {
            position: absolute;
            bottom: 0;
            width: 100%;
            left: 0;
            margin: 0;
            padding: 0;
            background: $background-color;
            opacity: 0.9;
        }

        &__box {
            display: flex;
            margin-top: 32px;

            > div {
                flex: 0 1 50%;
            }
        }

        &__label {
            font-weight: 100;
            font-size: 14px;
            margin-bottom: 4px;
        }
    }
</style>
