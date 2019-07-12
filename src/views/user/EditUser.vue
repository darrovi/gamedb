<template>
    <section padding has-header class="edit-user">
        <header header>
            <h1>{{$t('edit-user.title')}}</h1>
            <a @click="$router.go(-1)">
                <img src="@/assets/icons/close.svg">
            </a>
        </header>

        <form @submit="editUser">
            <fieldset>
                <label for="name">{{$t('edit-user.name')}}</label>
                <input id="name" v-model="user.name"/>
            </fieldset>

            <button class="edit-user__form-button" type="submit">{{$t('edit-user.title')}}</button>
        </form>
    </section>
</template>

<script>
    import {db} from '@/firebase/init';
    import firebase from "firebase"

    export default {
        name: "EditUser",
        data() {
            return {
                user: {}
            }
        },
        methods: {
            editUser(e) {
                this.$store.commit('loading/start');
                db.collection('users').doc(this.user.id).update({
                    name: this.user.name
                }).then(() => {
                    this.$router.go(-1);
                    this.$store.commit('loading/stop');
                });
                e.preventDefault();
            }
        },
        mounted() {
            db.collection('users').where('userId', '==', firebase.auth().currentUser.uid).get()
                .then((snapshot) => {
                    snapshot.forEach((doc) => {
                        this.user = {id: doc.id, ...doc.data()};
                    });
                });
        }
    }
</script>

<style scoped lang="scss">
    .edit-user {
        &__form-button {
            float: right;
            margin: 16px 0;
        }
    }
</style>
