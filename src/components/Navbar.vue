<template>
    <nav class="navbar">
        <ul>
            <li>
                <router-link to="/games" class="navbar__item">
                    <svg fill="#C1C1C1" xmlns="http://www.w3.org/2000/svg" width="26" height="18" viewBox="0 0 26 18">
                        <path fill-rule="nonzero"
                              d="M0 11h3.25V7H0v4zm0 7h3.25v-4H0v4zM0 4h3.25V0H0v4zm5.688 7H26V7H5.687v4zm0 7H26v-4H5.687v4zm0-18v4H26V0H5.687z"/>
                    </svg>
                    <span>{{$t('games.title')}}</span>
                </router-link>
            </li>
            <li>
                <router-link to="/playing" class="navbar__item">
                    <svg version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" fill="#C1C1C1" x="0px" y="0px" viewBox="0 0 53.626 53.626" style="enable-background:new 0 0 53.626 53.626;" xml:space="preserve">
                        <g>
                            <path d="M48.831,15.334c-7.083-11.637-17.753-3.541-17.753-3.541c-0.692,0.523-1.968,0.953-2.835,0.955	l-2.858,0.002c-0.867,0.001-2.143-0.429-2.834-0.952c0,0-10.671-8.098-17.755,3.539C-2.286,26.97,0.568,39.639,0.568,39.639	c0.5,3.102,2.148,5.172,5.258,4.912c3.101-0.259,9.832-8.354,9.832-8.354c0.556-0.667,1.721-1.212,2.586-1.212l17.134-0.003	c0.866,0,2.03,0.545,2.585,1.212c0,0,6.732,8.095,9.838,8.354c3.106,0.26,4.758-1.812,5.255-4.912	C53.055,39.636,55.914,26.969,48.831,15.334z M20.374,24.806H16.7v3.541c0,0-0.778,0.594-1.982,0.579	c-1.202-0.018-1.746-0.648-1.746-0.648v-3.471h-3.47c0,0-0.433-0.444-0.549-1.613c-0.114-1.169,0.479-2.114,0.479-2.114h3.675	v-3.674c0,0,0.756-0.405,1.843-0.374c1.088,0.034,1.885,0.443,1.885,0.443l-0.015,3.604h3.47c0,0,0.606,0.778,0.656,1.718	C20.996,23.738,20.374,24.806,20.374,24.806z M37.226,28.842c-1.609,0-2.906-1.301-2.906-2.908c0-1.61,1.297-2.908,2.906-2.908	c1.602,0,2.909,1.298,2.909,2.908C40.135,27.542,38.828,28.842,37.226,28.842z M37.226,20.841c-1.609,0-2.906-1.3-2.906-2.907	c0-1.61,1.297-2.908,2.906-2.908c1.602,0,2.909,1.298,2.909,2.908C40.135,19.542,38.828,20.841,37.226,20.841z M44.468,25.136	c-1.609,0-2.906-1.3-2.906-2.908c0-1.609,1.297-2.908,2.906-2.908c1.602,0,2.909,1.299,2.909,2.908	C47.377,23.836,46.07,25.136,44.468,25.136z"/>
                        </g>
                    </svg>
                    <span>{{$t('playing.title')}}</span>
                </router-link>
            </li>
            <li>
                <router-link to="/consoles" class="navbar__item">
                    <svg fill="#C1C1C1" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"viewBox="0 0 576.859 576.859" style="enable-background:new 0 0 576.859 576.859;"xml:space="preserve">
                        <path d="M464.695,0H112.161c-14.29,0-25.894,11.595-25.894,25.896v525.067c0,14.301,11.605,25.896,25.894,25.896h258.517		c66.229,0,119.915-53.688,119.915-119.906V25.896C490.593,11.595,478.987,0,464.695,0z M135.085,80.745		c0-11.744,9.523-21.255,21.259-21.255h264.168c11.736,0,21.257,9.511,21.257,21.255v149.381c0,11.745-9.521,21.255-21.257,21.255		H156.345c-11.736,0-21.259-9.51-21.259-21.255V80.745z M264.431,430.222c0,4.657-3.776,8.433-8.431,8.433h-31.23v31.228		c0,4.658-3.774,8.433-8.432,8.433h-40.82c-4.657,0-8.433-3.774-8.433-8.433v-31.228h-31.224c-4.658,0-8.434-3.776-8.434-8.433		V389.4c0-4.657,3.776-8.433,8.434-8.433h31.226v-31.229c0-4.657,3.776-8.432,8.433-8.432h40.823c4.657,0,8.431,3.773,8.431,8.432		v31.229h31.23c4.655,0,8.431,3.774,8.431,8.433v40.821H264.431z M353.756,490.33c-17.257,0-31.245-13.988-31.245-31.246		c0-17.257,13.988-31.247,31.245-31.247c17.258,0,31.246,13.988,31.246,31.247C385.004,476.342,371.014,490.33,353.756,490.33z		 M411.442,394.188c-17.258,0-31.244-13.987-31.244-31.246c0-17.258,13.986-31.247,31.244-31.247		c17.259,0,31.247,13.987,31.247,31.247C442.689,380.2,428.701,394.188,411.442,394.188z"/>
                    </svg>
                    <span>{{$t('consoles.title')}}</span>
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
                    <span>{{$t('user.title')}}</span>
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
        z-index: 700;

        ul {
            max-width: $body-max-width;
            margin: 0 auto;
            display: flex;
            justify-content: space-evenly;
            //noinspection CssInvalidFunction
            padding: 0 16px env(safe-area-inset-bottom);

            li {
                flex: 1 1 25%;
                list-style: none;
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
                font-weight: 400;
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
