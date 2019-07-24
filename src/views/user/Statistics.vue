<template>
    <section padding has-header id="statistics" class="statistics">
        <header header>
            <a @click="$router.go(-1)">
                <img only-margin-left src="@/assets/icons/back.svg">
            </a>
            <h1>{{$t('statistics.title')}}</h1>
        </header>

        <ul class="statistics__tabs">
            <li @click="selectConsole({slug: 'all'})" :class="{selected: 'all' === selected}">
                <img :src="'/icons/consoles/all.svg'">
            </li>
            <li v-for="console in consoles" :key="console.slug" @click="selectConsole(console)"
                :class="{selected: console.slug === selected}">
                <img :src="console.logo">
            </li>
        </ul>

        <div id="statistics-info" class="statistics__info">
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
    import {CONSOLES} from '@/utils/consoles'

    export default {
        name: "Statistics",
        data() {
            return {
                consoles: CONSOLES,
                selected: 'all'
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
                document.getElementById('statistics-info').style.opacity = '0';

                setTimeout(() => {
                    document.getElementById('statistics').style.setProperty('--color', console.color || '#c1c1c1')
                    this.selected = console.slug;
                    document.getElementById('statistics-info').style.opacity = '1';
                }, 200);
            }
        }
    }
</script>

<style scoped lang="scss">
    .statistics {
        --color: white;

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

                &::after {
                    content: '';
                    display: block;
                    height: 3px;
                    width: 100%;
                    background: var(--color);
                    transform: scaleX(0);
                    transition: all 0.1s ease-in-out;
                }
                &.selected {
                    &::after {
                        transform: scaleX(1);

                    }

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
            transition: opacity 0.2s ease-in-out;
            p {
                margin-top: 16px;
            }

            b {
                color: var(--color);
            }
        }
    }
</style>
