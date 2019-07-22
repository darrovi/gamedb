<template>
    <div class="profile-image-picker">
        <img class="profile-image-picker__selected-image" src="@/assets/imgs/profile-default.jpg"
             id="selected-image" @click="showImagesModal = true">

        <Modal v-show="showImagesModal">
            <div slot="body" class="profile-image-picker__default-images">
                <img @click="selectImage(image)" v-for="image in defaultImages" :src="image.url" :key="image.ref"/>
            </div>
            <template slot="buttons">
                <button secondary @click="showImagesModal = false">{{$t('common.cancel')}}</button>
            </template>
        </Modal>
    </div>
</template>

<script>
    import Modal from "./Modal";
    import {DEFAULT_IMAGES_NUMBER} from '@/utils/constants'
    import firebase from "firebase";

    export default {
        name: "ProfileImagePicker",
        components: {Modal},
        data() {
            return {
                showImagesModal: false,
                defaultImages: [],
                selectedImage: ''
            }
        },
        props: ['userImageRef'],
        methods: {
            selectImage(image) {
                this.showImagesModal = false;
                document.getElementById('selected-image').src = image.url;
                this.$emit('selectedImage', image.ref)
            }
        },
        mounted() {
            for (let i = 0; i < DEFAULT_IMAGES_NUMBER; i++) {
                firebase.storage().ref('users/defaults/' + i + '.png').getDownloadURL().then((url) => {
                    const image = {
                        url: url,
                        ref: 'defaults/' + i + '.png'
                    };

                    this.defaultImages.push(image);
                    if (image.ref === this.userImageRef) {
                        this.selectImage(image);
                    }
                })
            }
        }
    }
</script>

<style scoped lang="scss">
    .profile-image-picker {
        text-align: center;

        &__selected-image {
            height: 100px;
            width: 100px;
            border-radius: 100px;
        }

        &__default-images {
            display: flex;
            flex-wrap: wrap;
            justify-content: space-between;

            img {
                height: 50px;
                width: 50px;
                border-radius: 50px;
                margin: 10px;
            }
        }
    }
</style>
