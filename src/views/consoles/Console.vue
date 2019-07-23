<template>
    <section padding has-header v-if="console" class="console">
        <header header :style="{background: console.color}">
            <a @click="$router.go(-1)">
                <img only-margin-left src="@/assets/icons/back--white.svg">
            </a>
            <h1>{{console.name}}</h1>
        </header>

        <div>
            <div class="console__box">
                <div>
                    <p class="console__label">{{$t('console.release-date')}}</p>
                    <p>{{console.releaseDate | formatDate}}</p>
                </div>
                <div>
                    <p class="console__label">{{$t('console.producer')}}</p>
                    <p>{{console.producer ? console.producer + ' (Gen ' + console.generationNumber + ')' : '---'}}</p>
                </div>
            </div>

            <div class="console__box">
                <div>
                    <p class="console__label">{{$t('console.bought-date')}}</p>
                    <p>{{console.boughtDate | formatDate}}</p>
                </div>
                <div>
                    <p class="console__label">{{$t('console.seller')}}</p>
                    <p>{{console.seller || '---'}}</p>
                </div>
            </div>

            <div class="console__box">
                <div>
                    <p class="console__label">{{$t('console.price')}}</p>
                    <p class="console__price">{{console.price ? console.price + '€': '---'}} </p>
                </div>
            </div>

            <div class="console__box">
                <div>
                    <p class="console__label">{{$t('console.comment')}}</p>
                    <p>{{console.comment || '---'}}</p>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
    export default {
        name: "Console",
        computed: {
            console() {
                return this.$store.getters['consoles/currentConsole']
            }
        },
        created() {
            this.$store.dispatch('consoles/setCurrentConsole', this.$route.params.id);
        },
        destroyed() {
            this.$store.dispatch('consoles/resetCurrentConsole');
        }
    }
</script>

<style scoped lang="scss">
    .console {
        h1 {
            color: white;
        }
        &__box {
            display: flex;
            &:not(:first-child) {
                margin-top: 32px;
            }

            > div {
                flex: 1 1 50%;

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

        &__price {
            font-size: 28px;
            font-weight: 500;
        }
    }
</style>
