<template>
    <section padding has-header class="create-console">
        <header header>
            <a @click="$router.go(-1)">
                <img only-margin-left src="@/assets/icons/back.svg">
            </a>
            <h1>{{$t('create-console.title')}}</h1>
        </header>

        <form @submit="createConsole">
            <fieldset>
                <label required for="console">{{$t('create-console.console')}}</label>
                <select id="console" v-model="console" required>
                    <option v-for="c of consoles" :value="c" :key="c.slug">{{c.name}}</option>
                </select>
            </fieldset>

            <fieldset>
                <label for="boughtDate">{{$t('create-console.bought-date')}}</label>
                <input id="boughtDate" type="date" v-model="console.boughtDate"/>
            </fieldset>

            <fieldset>
                <label for="price">{{$t('create-console.price')}}</label>
                <input id="price" type="number" v-model="console.price"/>
            </fieldset>

            <fieldset>
                <label for="seller">{{$t('create-console.seller')}}</label>
                <input id="seller" type="text" v-model="console.seller"/>
            </fieldset>

            <fieldset>
                <label for="comment">{{$t('create-console.comment')}}</label>
                <input id="comment" type="text" v-model="console.comment"/>
            </fieldset>

            <button class="create-console__form-button" type="submit">{{$t('create-console.title')}}</button>
        </form>
    </section>
</template>

<script>
    import {CONSOLES} from '@/utils/consoles';
    import {db} from '@/firebase/init';
    import moment from 'moment'

    export default {
        name: "CreateConsole",
        data() {
            return {
                consoles: CONSOLES,
                console: {}
            }
        },
        methods: {
            createConsole(e) {
                const userId = this.$store.getters['auth/userId'];
                if (userId) {
                    this.$store.commit('loading/start');
                    this.console.userId = userId;
                    this.console.createdAt = moment().format();
                    this.console.updatedAt = moment().format();
                    this.console.releaseDate = moment.unix(this.console.releaseDate).format();

                    if (this.console.price) {
                        this.console.price = Number(this.console.price);
                    }

                    if (!this.console.boughtDate) {
                        delete this.console.boughtDate
                    }

                    db.collection('consoles').add(this.console).then((doc) => {
                        this.$store.commit('loading/stop');
                        this.$router.push({path: '/consoles/' + doc.id});
                    });
                }
                e.preventDefault();
            }
        }
    }
</script>

<style scoped lang="scss">
    .create-console {

        &__form-button {
            float: right;
            margin: 16px 0;
        }
    }
</style>
