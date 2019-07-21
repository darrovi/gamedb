<template>
    <section padding has-header id="statistics" class="statistics">
        <header header>
            <a @click="$router.go(-1)">
                <img only-margin-left src="@/assets/icons/back.svg">
            </a>
            <h1>{{$t('statistics.title')}}</h1>
        </header>

        <ul class="statistics__tabs">
            <li v-for="console in consoles" :key="console.id" @click="selectConsole(console)"
                :class="{selected: console.id === selected}">
                <img :src="console.logo">
            </li>
        </ul>

        <div class="statistics__info">
            <p>
                {{$t('statistics.total')}} <b>{{totalGames}}</b> {{$tc('statistics.games', totalGames)}}
            </p>
            <p>
                {{$t('statistics.playing')}} <b>{{playingGames}}</b> {{$tc('statistics.games', playingGames)}}
            </p>
            <p>
                {{$t('statistics.finished')}} <b>{{finishedGames}}</b> {{$tc('statistics.games', finishedGames)}}
            </p>
            <p>
                {{$t('statistics.score')}} <b>{{averageScore}}</b> {{$tc('statistics.points', averageScore)}}
            </p>
        </div>
    </section>
</template>

<script>
    import {CONSOLES} from '@/constants'

    export default {
        name: "Statistics",
        data() {
            return {
                consoles: CONSOLES,
                selected: 0
            }
        },
        computed: {
            games() {
                return this.$store.getters['games/filtered'];
            },
            totalGames() {
                return this.games.length;
            },
            playingGames() {
                return this.games.filter(g => g.playing).length;
            },
            finishedGames() {
                return this.games.filter(g => g.completed).length;
            },
            averageScore() {
                let average = 0;

                for (const game of this.games) {
                    average += game.score || 0;
                }

                return Math.round(average / this.games.length * 100) / 100;
            }
        },
        methods: {
            selectConsole(console) {
                this.selected = console.id;
                // if (console.color) {
                document.getElementById('statistics').style.setProperty('--color', console.color || '#c1c1c1')
                // } else {
                //     document.getElementById('statistics').style.removeProperty('--color');
                // }
            }
        }
    }
</script>

<style scoped lang="scss">
    .statistics {
        --color: #c1c1c1;

        &__tabs {
            display: flex;
            padding: 0;
            margin: 0;
            list-style: none;
            overflow: auto;

            &::-webkit-scrollbar {
                width: 0 !important
            }

            li {
                margin-right: 8px;

                &.selected {
                    border-bottom: 3px solid var(--color);

                    img {
                        transform: scale(1.2);
                    }
                }

                img {
                    height: 20px;
                    padding: 8px 8px 2px;
                    transition: all 0.2s ease-in-out;
                }
            }
        }

        &__info {
            p {
                margin-top: 16px;
            }

            b {
                color: var(--color);
            }
        }
    }
</style>
