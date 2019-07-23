<template>
    <router-link :to="'/consoles/' + console.id" tag="article" class="console-list-item">
        <img :src="console.logo"/>
        <h2>{{console.name}}</h2>

        <div class="console-list-item__image" :style="{backgroundImage: 'url(' + console.image +')'}"></div>
    </router-link>
</template>

<script>
    export default {
        name: "ConsoleListItem",
        props: ['console']
    }
</script>

<style scoped lang="scss">
    .console-list-item {
        border-radius: 6px;
        background-color: $card-color;
        box-shadow: 0 2px 2px 0 $card-shadow-color;
        overflow: hidden;
        display: flex;
        transition: all 0.2s ease-in-out;
        padding: 16px;
        align-items: center;
        position: relative;

        &:active {
            transform: scale(1.05);
            box-shadow: 0 7px 7px 0 $card-shadow-color;

            .console-list-item__image {
                transform: scale(1.2);
            }
        }

        &__image {
            position: absolute;
            top: 0;
            right: 0;
            width: 50%;
            height: 100%;
            background-size: cover;
            background-position: center;
            opacity: 0.5;
            transition: all 0.2s ease-in-out;
        }

        img {
            margin-right: 16px;
            height: 20px;
        }

        h2 {
            z-index: 1;
        }
    }
</style>
