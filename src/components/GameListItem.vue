<template>
    <router-link :to="'/games/' + game.id" tag="article" class="game-list-item">
        <div class="game-list-item__image" v-bind:style="{ backgroundImage: 'url(' + game.image + ')' }"></div>
        <div class="game-list-item__info">
            <h2 class="game-list-item__name">
                <template v-if="game.playing">
                    <svg version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="0 0 53.626 53.626" style="enable-background:new 0 0 53.626 53.626;" xml:space="preserve"><path d="M48.831,15.334c-7.083-11.637-17.753-3.541-17.753-3.541c-0.692,0.523-1.968,0.953-2.835,0.955	l-2.858,0.002c-0.867,0.001-2.143-0.429-2.834-0.952c0,0-10.671-8.098-17.755,3.539C-2.286,26.97,0.568,39.639,0.568,39.639	c0.5,3.102,2.148,5.172,5.258,4.912c3.101-0.259,9.832-8.354,9.832-8.354c0.556-0.667,1.721-1.212,2.586-1.212l17.134-0.003	c0.866,0,2.03,0.545,2.585,1.212c0,0,6.732,8.095,9.838,8.354c3.106,0.26,4.758-1.812,5.255-4.912	C53.055,39.636,55.914,26.969,48.831,15.334z M20.374,24.806H16.7v3.541c0,0-0.740,0.594-1.982,0.579	c-1.202-0.018-1.746-0.648-1.746-0.648v-3.471h-3.47c0,0-0.433-0.444-0.549-1.613c-0.114-1.169,0.479-2.114,0.479-2.114h3.675	v-3.674c0,0,0.756-0.405,1.843-0.374c1.088,0.034,1.885,0.443,1.885,0.443l-0.015,3.604h3.47c0,0,0.606,0.740,0.656,1.718	C20.996,23.738,20.374,24.806,20.374,24.806z M37.226,28.842c-1.609,0-2.906-1.301-2.906-2.908c0-1.61,1.297-2.908,2.906-2.908	c1.602,0,2.909,1.298,2.909,2.908C40.135,27.542,38.828,28.842,37.226,28.842z M37.226,20.841c-1.609,0-2.906-1.3-2.906-2.907	c0-1.61,1.297-2.908,2.906-2.908c1.602,0,2.909,1.298,2.909,2.908C40.135,19.542,38.828,20.841,37.226,20.841z M44.468,25.136	c-1.609,0-2.906-1.3-2.906-2.908c0-1.609,1.297-2.908,2.906-2.908c1.602,0,2.909,1.299,2.909,2.908	C47.377,23.836,46.07,25.136,44.468,25.136z"/></svg>
                </template>
                <template v-if="game.completed">
                    <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="0 0 24 24">
                        <path d="M 23 0.09375 L 21.5 1.40625 C 21.5 1.40625 19.292969 3.1705 17.09375 3.1705 C 16.09375 3.1705 15.3125 2.804688 14.3125 2.40625 C 13.210938 1.90625 11.708438 1.1705 10 1.1705 C 4.601563 1.1705 1.511719 4.488281 1.3125 4.6705 L 1 5 L 6.1705 19.59375 L 7.65625 23.71705 L 9.53125 23.0625 L 7.40125 18.09375 C 8.570844 17.410156 10.324219 16.09375 12.09375 16.09375 C 13.59375 16.09375 14.511719 16.394531 15.3125 16.59375 C 16.113281 16.792969 16.704531 17.09375 18.09375 17.09375 C 20.492188 17.09375 22.492188 16 22.59375 16 L 23.09375 15.6705 Z M 10.09375 3 C 10.355469 3 10.605469 3.03125 10.84375 3.0625 L 11.6705 6.3125 C 12.585938 6.3125 15.09375 7.5 15.09375 7.5 L 14.375 4.375 C 15.199219 4.730469 16.050401 5 17.1705 5 C 17.652344 5 18.113281 4.941406 18.5625 4.84375 L 18.8125 8 C 18.8125 8 19.851563 7.722656 21.1705 6.705 L 21.1705 11.09375 C 20.040125 11.585938 19.09375 11.8125 19.09375 11.8125 L 19.34375 15.0625 C 18.917969 15.144531 18.476563 15.1705 18 15.1705 C 17.5625 15.1705 17.195313 15.132813 16.84375 15.0625 L 16.09375 11.8125 C 15.09375 11.511719 13.605469 11 12.90625 11 L 13.8125 14.34375 C 13.273438 14.254013 12.675401 14.1705 11.90625 14.1705 C 11.273438 14.1705 10.652344 14.34375 10.0625 14.53125 L 8.8125 11.3125 C 7.770063 11.734375 6.742188 12.504013 6.03125 13.09375 L 4.40625 8.53125 C 5.705 7.410156 7.3125 6.90625 7.3125 6.90625 L 6.03125 3.40125 C 7.132813 3.335938 8.488281 3 10.09375 3 Z M 19.09375 11.8125 L 18.8125 8 C 18.8125 8 18.207031 8.1705 17.40625 8.1705 C 16.304688 8.1705 15.09375 7.59375 15.09375 7.59375 L 16 11.6705 C 16 11.6705 16.704531 11.90625 17.59375 11.90625 C 18.292969 11.90625 19.09375 11.8125 19.09375 11.8125 Z M 11.6705 6.3125 L 10.90625 6.3125 C 8.90625 6.3125 7.1705 7 7.1705 7 L 8.90625 11.3125 C 8.90625 11.3125 10.195313 10.8125 11.09375 10.8125 C 11.992188 10.8125 12.90625 10.90625 12.90625 10.90625 Z "></path>
                    </svg>
                </template>
                {{game.name || '---'}}
            </h2>
            <h3 class="game-list-item__genres">{{game.genres || '---'}}</h3>
            <h4 class="game-list-item__company">{{game.publishers || '---'}}</h4>
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
        overflow: hidden;
        display: flex;
        align-items: center;
        transition: all 0.2s ease-in-out;
        width: 100%;
        background: $card-color;
        box-shadow: 0 2px 12px 3px $card-shadow-color;
        border-radius: 6px;

        &:active {
            transform: scale(1.05);
            box-shadow: 0 2px 13px 16px $card-shadow-color;
        }

        &__image {
            height: 88px;
            width: 88px;
            position: relative;
            background-position: center;
            background-size: cover;
            flex-shrink: 0;

            &::after {
                content: '';
                display: block;
                position: absolute;
                left: 1px;
                width: 100%;
                height: 100%;

                background: rgba(36, 35, 38, 0);
                background: -moz-linear-gradient(left, rgba(36, 35, 38, 0) 0%, rgba(36, 35, 38, 0.40) 70%, rgba(36, 35, 38, 1) 100%);
                background: -webkit-gradient(left top, right top, color-stop(0%, rgba(36, 35, 38, 0)), color-stop(70%, rgba(36, 35, 38, 0.40)), color-stop(100%, rgba(36, 35, 38, 1)));
                background: -webkit-linear-gradient(left, rgba(36, 35, 38, 0) 0%, rgba(36, 35, 38, 0.40) 70%, rgba(36, 35, 38, 1) 100%);
                background: -o-linear-gradient(left, rgba(36, 35, 38, 0) 0%, rgba(36, 35, 38, 0.40) 70%, rgba(36, 35, 38, 1) 100%);
                background: -ms-linear-gradient(left, rgba(36, 35, 38, 0) 0%, rgba(36, 35, 38, 0.40) 70%, rgba(36, 35, 38, 1) 100%);
                background: linear-gradient(to right, rgba(36, 35, 38, 0) 0%, rgba(36, 35, 38, 0.40) 70%, rgba(36, 35, 38, 1) 100%);
                filter: progid:DXImageTransform.Microsoft.gradient(startColorstr='#000000', endColorstr='#000000', GradientType=1);
            }
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

            svg {
                height: 15px;
                fill: $primary-color;

                &:not(:last-child) {
                    margin-right: 5px;
                }
            }
        }

        &__genres {
            margin-bottom: 4px;
            overflow: hidden;
            text-overflow: ellipsis;
            white-space: nowrap;
        }

        &__company {
            overflow: hidden;
            text-overflow: ellipsis;
            white-space: nowrap;
        }
    }
</style>
