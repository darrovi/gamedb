<template>
    <router-link v-bind:to="'/games/' + game.id" tag="article" class="game-list-item">
        <div class="game-list-item__image" v-bind:style="{ backgroundImage: 'url(' + game.image + ')' }"></div>
        <div class="game-list-item__info">
            <h2 class="game-list-item__name">{{game.name}}</h2>
            <h3 class="game-list-item__categories">{{game.genre}}</h3>
            <h4 class="game-list-item__company">{{game.company}}</h4>
        </div>
    </router-link>
</template>

<script>
    export default {
        name: "GameListItem",
        props: ['game']
    }
</script>

<style scoped lang="scss">
    .game-list-item {
        border-radius: 6px;
        background-color: $card-color;
        box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.5);
        overflow: hidden;
        display: flex;
        transition: all 0.2s ease-in-out;

        &:active {
            transform: scale(1.05);
            box-shadow: 0 7px 7px 0 rgba(0, 0, 0, 0.5);
        }

        &__image {
            height: 88px;
            width: 88px;
            background-position: center;
            background-size: cover;
            flex-shrink: 0;
        }

        &__info {
            padding: 8px;
            overflow: hidden;
        }

        &__name {
            color: $primary-color;
            margin-bottom: 4px;
            overflow: hidden;
            text-overflow: ellipsis;
            white-space: nowrap;
        }

        &__categories {
            margin-bottom: 4px;
            overflow: hidden;
            text-overflow: ellipsis;
            white-space: nowrap;
        }

        &__company {
        }
    }
</style>
