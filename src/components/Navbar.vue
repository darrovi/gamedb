<template>
    <nav class="navbar">
        <ul>
            <li>
                <router-link to="/games" class="navbar__item">
                    <svg fill="#C1C1C1" xmlns="http://www.w3.org/2000/svg" width="26" height="18" viewBox="0 0 26 18">
                        <path fill-rule="nonzero"
                              d="M0 11h3.25V7H0v4zm0 7h3.25v-4H0v4zM0 4h3.25V0H0v4zm5.688 7H26V7H5.687v4zm0 7H26v-4H5.687v4zm0-18v4H26V0H5.687z"/>
                    </svg>
                    <span>Biblioteca</span>
                </router-link>
            </li>
            <li>
                <router-link to="/playing" class="navbar__item">
                    <!-- TODO change icon -->
                    <svg fill="#C1C1C1" xmlns="http://www.w3.org/2000/svg" width="26" height="18" viewBox="0 0 26 18">
                        <path fill-rule="nonzero"
                              d="M0 11h3.25V7H0v4zm0 7h3.25v-4H0v4zM0 4h3.25V0H0v4zm5.688 7H26V7H5.687v4zm0 7H26v-4H5.687v4zm0-18v4H26V0H5.687z"/>
                    </svg>
                    <span>Jugando</span>
                </router-link>
            </li>
            <li>
                <router-link to="/consoles" class="navbar__item">
                    <!-- TODO change icon -->
                    <svg fill="#C1C1C1" xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18">
                        <g fill-rule="nonzero">
                            <path d="M9 11.25c-3.004 0-9 1.508-9 4.5V18h18v-2.25c0-2.992-5.996-4.5-9-4.5z"/>
                            <circle cx="9" cy="4.5" r="4.5"/>
                        </g>
                    </svg>
                    <span>Consolas</span>
                </router-link>
            </li>
            <li>
                <router-link to="/user" class="navbar__item">
                    <svg fill="#C1C1C1" xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18">
                        <g fill-rule="nonzero">
                            <path d="M9 11.25c-3.004 0-9 1.508-9 4.5V18h18v-2.25c0-2.992-5.996-4.5-9-4.5z"/>
                            <circle cx="9" cy="4.5" r="4.5"/>
                        </g>
                    </svg>
                    <span>Perfil</span>
                </router-link>
            </li>
        </ul>
    </nav>
</template>

<script>
    export default {
        name: "Navbar"
    }
</script>

<style scoped lang="scss">
    .navbar {
        position: fixed;
        bottom: 0;
        left: 0;
        width: 100vw;
        background: black;

        ul {
            max-width: $body-max-width;
            margin: 0 auto;
            display: flex;
            justify-content: space-evenly;
            //noinspection CssInvalidFunction
            padding: 0 16px env(safe-area-inset-bottom);

            li {
                flex: 1 1 25%;
            }
        }

        &__item {
            display: flex;
            flex-direction: column;
            align-items: center;
            padding: 8px;
            text-decoration: none;

            svg {
                padding-bottom: 4px;
                width: 20px;
            }

            span {
                font-size: 12px;
                color: $text-color;
            }

            &.router-link-active {
                svg {
                    fill: $primary-color;
                }

                span {
                    color: $primary-color;
                }
            }
        }
    }
</style>
