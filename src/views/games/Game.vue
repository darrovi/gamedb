<template>
    <section class="game" v-if="game" @scroll="onScroll">
        <header class="game__header">
            <h1>{{game.name}}</h1>
            <a @click="$router.go(-1)">
                <img src="@/assets/icons/close--white.svg">
            </a>

            <div id="game-image" class="game__image" v-bind:style="{ backgroundImage: 'url(' + game.image + ')' }">
                <div class="game__image-gradient"></div>
            </div>
        </header>

        <div class="game__content" padding>

            <div class="game__buttons">
                <div>
                    <button @click="markAsPlaying">
                        <svg version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="0 0 53.626 53.626" style="enable-background:new 0 0 53.626 53.626;" xml:space="preserve"><path d="M48.831,15.334c-7.083-11.637-17.753-3.541-17.753-3.541c-0.692,0.523-1.968,0.953-2.835,0.955	l-2.858,0.002c-0.867,0.001-2.143-0.429-2.834-0.952c0,0-10.671-8.098-17.755,3.539C-2.286,26.97,0.568,39.639,0.568,39.639	c0.5,3.102,2.148,5.172,5.258,4.912c3.101-0.259,9.832-8.354,9.832-8.354c0.556-0.667,1.721-1.212,2.586-1.212l17.134-0.003	c0.866,0,2.03,0.545,2.585,1.212c0,0,6.732,8.095,9.838,8.354c3.106,0.26,4.758-1.812,5.255-4.912	C53.055,39.636,55.914,26.969,48.831,15.334z M20.374,24.806H16.7v3.541c0,0-0.778,0.594-1.982,0.579	c-1.202-0.018-1.746-0.648-1.746-0.648v-3.471h-3.47c0,0-0.433-0.444-0.549-1.613c-0.114-1.169,0.479-2.114,0.479-2.114h3.675	v-3.674c0,0,0.756-0.405,1.843-0.374c1.088,0.034,1.885,0.443,1.885,0.443l-0.015,3.604h3.47c0,0,0.606,0.778,0.656,1.718	C20.996,23.738,20.374,24.806,20.374,24.806z M37.226,28.842c-1.609,0-2.906-1.301-2.906-2.908c0-1.61,1.297-2.908,2.906-2.908	c1.602,0,2.909,1.298,2.909,2.908C40.135,27.542,38.828,28.842,37.226,28.842z M37.226,20.841c-1.609,0-2.906-1.3-2.906-2.907	c0-1.61,1.297-2.908,2.906-2.908c1.602,0,2.909,1.298,2.909,2.908C40.135,19.542,38.828,20.841,37.226,20.841z M44.468,25.136	c-1.609,0-2.906-1.3-2.906-2.908c0-1.609,1.297-2.908,2.906-2.908c1.602,0,2.909,1.299,2.909,2.908	C47.377,23.836,46.07,25.136,44.468,25.136z"/></svg>
                        {{$t('game.playing')}}
                    </button>
                    <p v-if="game.lastStarted">{{$t('game.from')}} {{game.lastStarted | formatDate}}</p>
                </div>
                <div>
                    <button @click="markAsFinished">
                        <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="96" height="96"
                             viewBox="0 0 24 24">
                            <path d="M 23 0.09375 L 21.5 1.40625 C 21.5 1.40625 19.292969 3.1875 17.09375 3.1875 C 16.09375 3.1875 15.3125 2.804688 14.3125 2.40625 C 13.210938 1.90625 11.898438 1.1875 10 1.1875 C 4.601563 1.1875 1.511719 4.488281 1.3125 4.6875 L 1 5 L 6.1875 19.59375 L 7.65625 23.71875 L 9.53125 23.0625 L 7.78125 18.09375 C 8.589844 17.410156 10.324219 16.09375 12.09375 16.09375 C 13.59375 16.09375 14.511719 16.394531 15.3125 16.59375 C 16.113281 16.792969 16.894531 17.09375 18.09375 17.09375 C 20.492188 17.09375 22.492188 16 22.59375 16 L 23.09375 15.6875 Z M 10.09375 3 C 10.355469 3 10.605469 3.03125 10.84375 3.0625 L 11.6875 6.3125 C 12.585938 6.3125 15.09375 7.5 15.09375 7.5 L 14.375 4.375 C 15.199219 4.730469 16.050781 5 17.1875 5 C 17.652344 5 18.113281 4.941406 18.5625 4.84375 L 18.8125 8 C 18.8125 8 19.851563 7.722656 21.1875 6.875 L 21.1875 11.09375 C 20.078125 11.585938 19.09375 11.8125 19.09375 11.8125 L 19.34375 15.0625 C 18.917969 15.144531 18.476563 15.1875 18 15.1875 C 17.5625 15.1875 17.195313 15.132813 16.84375 15.0625 L 16.09375 11.8125 C 15.09375 11.511719 13.605469 11 12.90625 11 L 13.8125 14.34375 C 13.273438 14.257813 12.675781 14.1875 11.90625 14.1875 C 11.273438 14.1875 10.652344 14.34375 10.0625 14.53125 L 8.8125 11.3125 C 7.789063 11.734375 6.742188 12.507813 6.03125 13.09375 L 4.40625 8.53125 C 5.875 7.410156 7.3125 6.90625 7.3125 6.90625 L 6.03125 3.78125 C 7.132813 3.335938 8.488281 3 10.09375 3 Z M 19.09375 11.8125 L 18.8125 8 C 18.8125 8 18.207031 8.1875 17.40625 8.1875 C 16.304688 8.1875 15.09375 7.59375 15.09375 7.59375 L 16 11.6875 C 16 11.6875 16.894531 11.90625 17.59375 11.90625 C 18.292969 11.90625 19.09375 11.8125 19.09375 11.8125 Z M 11.6875 6.3125 L 10.90625 6.3125 C 8.90625 6.3125 7.1875 7 7.1875 7 L 8.90625 11.3125 C 8.90625 11.3125 10.195313 10.8125 11.09375 10.8125 C 11.992188 10.8125 12.90625 10.90625 12.90625 10.90625 Z "></path>
                        </svg>
                        {{$t('game.finish')}}
                    </button>
                    <p v-if="game.lastFinished">{{$t('game.from')}} {{game.lastFinished | formatDate}}</p>
                </div>
            </div>

            <h2>{{$t('game.info')}}</h2>

            <div class="game__description" id="game-description">
                <p v-html="game.description"></p>

                <button @click="viewMoreDescription" class="game__more-description">
                    <img src="@/assets/icons/more-arrow.svg">
                </button>
            </div>

            <div class="game__box">
                <div>
                    <p class="game__label">{{$t('game.release-date')}}</p>
                    <p>{{game.releaseDate | formatDate}}</p>
                </div>
                <div>
                    <p class="game__label">{{$t('game.original-platform')}}</p>
                    <p>{{game.originalPlatform || '---'}}</p>
                </div>
            </div>

            <div class="game__box">
                <div>
                    <p class="game__label">{{$t('game.publishers')}}</p>
                    <p>{{game.publishers || '---'}}</p>
                </div>
                <div>
                    <p class="game__label">{{$t('game.developers')}}</p>
                    <p>{{game.developers || '---'}}</p>
                </div>
            </div>

            <div class="game__box">
                <div>
                    <p class="game__label">{{$t('game.genres')}}</p>
                    <p>{{game.genres || '---'}}</p>
                </div>
            </div>

            <div class="game__box">
                <div>
                    <p class="game__label">{{$t('game.serie')}}</p>
                    <p>{{game.serie || '---'}}</p>
                </div>
                <div>
                    <p class="game__label">{{$t('game.score')}}</p>
                    <p>{{game.score || '---'}}</p>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
    import {db} from '@/firebase/init';
    import moment from 'moment'

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
            },
            markAsPlaying() {
                db.collection('games').doc(this.game.id).update({
                    lastStarted: moment().format(),
                    playing: true
                })
            },
            markAsFinished() {
                db.collection('games').doc(this.game.id).update({
                    lastFinished: moment().format(),
                    playing: false,
                    completed: true
                })
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
            z-index: 700;
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

        &__buttons {
            display: flex;
            justify-content: space-around;
            margin-bottom: 32px;

            button {
                margin: 4px;
                display: flex;
                flex-direction: column;
                align-items: center;

                svg {
                    fill: $primary-color;
                    height: 50px;
                    margin-bottom: 8px;
                }
            }

            p {
                text-align: center;
                font-size: 14px;
            }
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

            h2 {
                margin-bottom: 8px;
            }
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

                &:first-child {
                    padding-right: 5px;
                }
                &:last-child {
                    padding-left: 5px;
                }
            }

        }

        &__label {
            font-weight: 100;
            font-size: 14px;
            margin-bottom: 4px;
        }
    }
</style>
