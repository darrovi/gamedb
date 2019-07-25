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

        <div class="console__action-buttons">
            <router-link tag="button" :to="'/console/' + console.id + '/edit'">
                {{$t('console.edit-console')}}
            </router-link>

            <button @click="showRemoveModal = true">
                {{$t('console.remove-console')}}
            </button>
        </div>

        <Modal v-show="showRemoveModal">
            <h2 slot="header">{{$t('console.remove-console')}}</h2>
            <p slot="body">{{$t('console.remove-console-description')}}</p>
            <template slot="buttons">
                <button secondary @click="showRemoveModal = false">{{$t('common.cancel')}}</button>
                <button @click="removeConsole">{{$t('console.remove-console')}}</button>
            </template>
        </Modal>
    </section>
</template>

<script>
    import Modal from "../../components/Modal";
    import {db} from '@/firebase/init';

    export default {
        name: "Console",
        components: {Modal},
        computed: {
            console() {
                return this.$store.getters['consoles/currentConsole']
            }
        },
        data() {
            return {
                showRemoveModal: false
            }
        },
        methods: {
            removeConsole() {
                this.$store.commit('loading/start');
                db.collection('consoles').doc(this.console.id).delete().then(() => {
                    this.$store.commit('loading/stop');
                    this.$router.go(-1);
                })
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

        &__action-buttons {
            display: flex;
            justify-content: space-around;
            margin-top: 40px;

            button {
                &:last-child {
                    color: $danger-color;
                }
            }
        }
    }
</style>
