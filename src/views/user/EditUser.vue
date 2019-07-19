<template>
    <section padding has-header class="edit-user">
        <header header>
            <a @click="$router.go(-1)">
                <img only-margin-left src="@/assets/icons/back.svg">
            </a>
            <h1>{{$t('edit-user.title')}}</h1>
        </header>

        <form @submit="editUser" v-if="user">
            <ProfileImagePicker @selectedImage="onSelectedImage" :userImageRef="user.imageRef"/>

            <fieldset>
                <label for="name">{{$t('edit-user.name')}}</label>
                <input id="name" v-model="user.name"/>
            </fieldset>

            <fieldset>
                <label for="nintendoId">{{$t('register.nintendo-id')}}</label>
                <input type="text" id="nintendoId" v-model="user.nintendoId"/>
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
                <label for="steamId">{{$t('register.steam-id')}}</label>
                <input type="text" id="steamId" v-model="user.steamId"/>
            </fieldset>

            <fieldset>
                <label for="originId">{{$t('register.origin-id')}}</label>
                <input type="text" id="originId" v-model="user.originId"/>
            </fieldset>

            <fieldset>
                <label for="battlenetId">{{$t('register.battlenet-id')}}</label>
                <input type="text" id="battlenetId" v-model="user.battlenetId"/>
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
                    playStationId: this.user.playStationId || '',
                    xBoxId: this.user.xBoxId || '',
                    nintendoId: this.user.nintendoId || '',
                    steamId: this.user.steamId || '',
                    originId: this.user.originId || '',
                    battlenetId: this.user.battlenetId || ''
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
