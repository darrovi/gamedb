<template>
    <section padding has-header class="edit-user">
        <header header>
            <h1>{{$t('edit-user.title')}}</h1>
            <a @click="$router.go(-1)">
                <img src="@/assets/icons/close.svg">
            </a>
        </header>

        <form @submit="editUser" v-if="user">
            <ProfileImagePicker @selectedImage="onSelectedImage" :userImageRef="user.imageRef"/>

            <fieldset>
                <label for="name">{{$t('edit-user.name')}}</label>
                <input id="name" v-model="user.name"/>
            </fieldset>


            <fieldset>
                <label for="playStationId">{{$t('register.play-station-id')}}</label>
                <input type="text" id="playStationId" v-model="user.playStationId"/>
            </fieldset>

            <fieldset>
                <label for="xBoxId">{{$t('register.x-box-id')}}</label>
                <input type="text" id="xBoxId" v-model="user.xBoxId"/>
            </fieldset>

            <fieldset>
                <label for="nintendoId">{{$t('register.nintendo-id')}}</label>
                <input type="text" id="nintendoId" v-model="user.nintendoId"/>
            </fieldset>

            <button class="edit-user__form-button" type="submit">{{$t('edit-user.title')}}</button>
        </form>
    </section>
</template>

<script>
    import {db} from '@/firebase/init';
    import ProfileImagePicker from "../../components/ProfileImagePicker";

    export default {
        name: "EditUser",
        components: {ProfileImagePicker},
        data() {
            return {
                selectedImage: ''
            }
        },
        computed: {
            user() {
                return this.$store.getters['auth/user'];
            }
        },
        methods: {
            onSelectedImage(ref) {
                this.selectedImage = ref;
            },
            editUser(e) {
                this.$store.commit('loading/start');
                db.collection('users').doc(this.user.id).update({
                    imageRef: this.selectedImage || this.user.imageRef,
                    name: this.user.name,
                    playStationId: this.user.playStationId,
                    xBoxId: this.user.xBoxId,
                    nintendoId: this.user.nintendoId
                }).then(() => {
                    this.$router.go(-1);
                    this.$store.commit('loading/stop');
                });
                e.preventDefault();
            }
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
