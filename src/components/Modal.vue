<template>
    <transition name="modal-fade">
        <div class="modal">
            <div class="modal__content" role="dialog">
                <header class="modal__header">
                    <slot name="header"></slot>
                </header>
                <section class="modal__body">
                    <slot name="body"></slot>
                </section>
                <footer class="modal__buttons">
                    <slot name="buttons"></slot>
                </footer>
            </div>
        </div>
    </transition>
</template>

<script>
    export default {
        name: "Modal"
    }
</script>

<style scoped lang="scss">

    .modal {
        position: fixed;
        top: 0;
        right: 0;
        z-index: 800;
        background: rgba(0, 0, 0, 0.72);
        width: 100vw;
        height: 100vh;
        display: flex;
        align-items: center;
        justify-content: center;

        &__content {
            width: 80vw;
            max-height: 80vh;
            overflow: auto;
            background: $card-color;
            border-radius: 6px;
            padding: 16px;
            box-sizing: border-box;
        }

        &__header {
            padding-bottom: 8px;
        }

        &__body {
            padding-bottom: 16px;
        }

        &__buttons {
            text-align: right;
        }
    }

    .modal-fade-enter,
    .modal-fade-leave-active {
        opacity: 0;
        .modal__content {
            transform: scale(0);
        }
    }

    .modal-fade-enter-active,
    .modal-fade-leave-active {
        transition: opacity .5s ease
    }

    .modal__content {
        transition: all .3s ease
    }
</style>
