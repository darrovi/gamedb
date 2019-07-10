<template>
    <div class="spinner-page" v-if="loading">
        <div class="item">
            <div class="double-bounce1"></div>
            <div class="double-bounce2"></div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'SpinnerPage',
        computed: {
            loading () {
                return this.$store.getters['loading/isLoading']
            }
        }
    }
</script>

<style scoped>
    .spinner-page {
        height: 100vh;
        width: 100vw;
        position: fixed;
        top: 0;
        left: 0;
        z-index: 900;
        display: flex;
        align-items: center;
        justify-content: center;
        background: rgba(0, 0, 0, 0.72);
        color: white;
    }

    .item {
        width: 40px;
        height: 40px;

        position: relative;
        margin: 100px auto;
    }
</style>
