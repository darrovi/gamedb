<template>
    <transition name="filter">
        <form padding has-header class="games-filter">
            <header header>
                <h1>{{$t('games-filter.title')}}</h1>
                <img src="@/assets/icons/close.svg" @click="$emit('close')">
            </header>

            <div class="games-filter__flex games-filter__checks">
                <div>
                    <fieldset checkbox>
                        <input @input="checkPlaying($event.target.checked)" type="checkbox" id="playing"
                               v-model="filter.playing"/>
                        <label for="playing"><span></span>{{$t('games-filter.playing')}}</label>
                    </fieldset>

                    <fieldset checkbox>
                        <input @input="checkNotPlaying($event.target.checked)" type="checkbox" id="not-playing"
                               v-model="filter.notPlaying"/>
                        <label for="not-playing"><span></span>{{$t('games-filter.not-playing')}}</label>
                    </fieldset>
                </div>

                <div>
                    <fieldset checkbox>
                        <input @input="checkFinished($event.target.checked)" type="checkbox" id="finished"
                               v-model="filter.finished"/>
                        <label for="finished"><span></span>{{$t('games-filter.finished')}}</label>
                    </fieldset>

                    <fieldset checkbox>
                        <input @input="checkNotFinished($event.target.checked)" type="checkbox" id="not-finished"
                               v-model="filter.notFinished"/>
                        <label for="not-finished"><span></span>{{$t('games-filter.not-finished')}}</label>
                    </fieldset>
                </div>
            </div>

            <div class="games-filter__flex">
                <fieldset>
                    <label for="releaseDateFrom">{{$t('games-filter.release-date-from')}}</label>
                    <input id="releaseDateFrom" type="date" v-model="filter.releaseDateFrom"/>
                </fieldset>

                <fieldset>
                    <label for="releaseDateTo">{{$t('games-filter.release-date-to')}}</label>
                    <input id="releaseDateTo" type="date" v-model="filter.releaseDateTo"/>
                </fieldset>
            </div>

            <button type="button" secondary @click="close">Clear filters</button>
            <button type="button" @click="onFilter">Filter!</button>
        </form>
    </transition>
</template>

<script>
    export default {
        name: "GamesFilter",
        props: ['filter'],
        methods: {
            close() {
                this.$emit('close');
                this.$store.dispatch('games/setFilter', {});
            },
            onFilter() {
                this.$emit('filter', this.filter);
            },
            checkPlaying(checked) {
                if (checked) {
                    document.getElementById('not-playing').checked = false;
                    delete this.filter.notPlaying;
                }
            },
            checkNotPlaying(checked) {
                if (checked) {
                    document.getElementById('playing').checked = false;
                    delete this.filter.playing;
                }
            },
            checkFinished(checked) {
                if (checked) {
                    document.getElementById('not-finished').checked = false;
                    delete this.filter.notFinished;
                }
            },
            checkNotFinished(checked) {
                if (checked) {
                    document.getElementById('finished').checked = false;
                    delete this.filter.finished;
                }
            }
        }
    }
</script>

<style scoped lang="scss">
    .games-filter {
        position: fixed;
        top: 0;
        right: 0;
        width: 100vw;
        height: 100vh;
        z-index: 900;
        background: $background-color;

        &__checks {
            margin-bottom: 32px;
        }

        &__flex {
            display: flex;

            > * {
                flex: 0 1 calc(50% - 8px);

                &:first-child {
                    margin-right: 8px;
                }

                &:last-child {
                    margin-left: 8px;
                }
            }
        }
    }

    .filter-enter,
    .filter-leave-active {
        opacity: 0;
    }

    .filter-enter-active,
    .filter-leave-active {
        transition: opacity .5s ease
    }
</style>
