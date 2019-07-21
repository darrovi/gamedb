<template>
    <div class="friend-codes" id="friend-codes">
        <div v-if="user.id">
            <!--<img src="@/assets/icons/user-ids/nintendo.svg"/>-->
            <p>{{user.id}}</p>
            <button @click="copy(user.id, $event)">Copy</button>
        </div>

        <div v-if="user.nintendoId">
            <img src="@/assets/icons/user-ids/nintendo.svg"/>
            <p>{{user.nintendoId}}</p>
            <button @click="copy(user.nintendoId, $event)">Copy</button>
        </div>

        <div v-if="user.playStationId">
            <img src="@/assets/icons/user-ids/playstation.svg"/>
            <p>{{user.playStationId}}</p>
            <button @click="copy(user.playStationId, $event)">Copy</button>
        </div>

        <div v-if="user.xBoxId">
            <img src="@/assets/icons/user-ids/xbox.svg"/>
            <p>{{user.xBoxId}}</p>
            <button @click="copy(user.xBoxId, $event)">Copy</button>
        </div>

        <div v-if="user.steamId">
            <img src="@/assets/icons/user-ids/steam.svg"/>
            <p>{{user.steamId}}</p>
            <button @click="copy(user.steamId, $event)">Copy</button>
        </div>

        <div v-if="user.originId">
            <img src="@/assets/icons/user-ids/origin.svg"/>
            <p>{{user.originId}}</p>
            <button @click="copy(user.originId, $event)">Copy</button>
        </div>

        <div v-if="user.battlenetId">
            <img src="@/assets/icons/user-ids/battlenet.svg"/>
            <p>{{user.battlenetId}}</p>
            <button @click="copy(user.battlenetId, $event)">Copy</button>
        </div>
    </div>
</template>

<script>
    export default {
        name: "FriendCodes",
        props: ['user'],
        methods: {
            copy(text, event) {
                const textArea = document.createElement('textArea');
                textArea.value = text;
                textArea.style.position = 'fixed';
                textArea.style.top = '0';

                document.body.appendChild(textArea);

                let range, selection;

                if (navigator.userAgent.match(/ipad|iphone/i)) {
                    range = document.createRange();
                    range.selectNodeContents(textArea);
                    selection = window.getSelection();
                    selection.removeAllRanges();
                    selection.addRange(range);
                    textArea.setSelectionRange(0, 999999);
                } else {
                    textArea.select();
                }
                document.execCommand('copy');
                document.body.removeChild(textArea);

                event.target.innerHTML = 'Copied!';
                event.target.style.color = '#c1c1c1';
                setTimeout(() => {
                    event.target.innerHTML = 'Copy';
                    event.target.style.color = '';
                }, 2000)
            }
        }
    }
</script>

<style scoped lang="scss">
    .friend-codes {
        width: 100%;

        > div {
            display: flex;
            align-items: center;
            width: 100%;
            border-bottom: 1px solid $card-color;

            img {
                height: 16px;
                margin-right: 8px;
            }

            button {
                transition: color 0.2s ease-in-out;
                margin-left: auto;
            }
        }
    }
</style>
