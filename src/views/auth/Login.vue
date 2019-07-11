<template>
    <section padding class="login">
        <h1>{{$t('login.title')}}</h1>

        <fieldset>
            <label for="email">{{$t('login.email')}}</label>
            <input type="email" id="email" v-model="user.email"/>
        </fieldset>

        <fieldset>
            <label for="password">{{$t('login.password')}}</label>
            <input type="password" id="password" v-model="user.password"/>
        </fieldset>

        <button>
            <router-link to="/games">Login (to games)</router-link>
        </button>
        <button>
            <router-link to="/register">Register</router-link>
        </button>
    </section>
</template>

<script>
    export default {
        name: "Login",
        data() {
            return {
                user: {}
            }
        }
    }
</script>

<style scoped lang="scss">
    .login {
        display: flex;
        justify-content: center;
        flex-direction: column;
        height: 100vh;

        h1 {
            text-align: center;
            font-size: 30px;
            color: $primary-color;
            margin-bottom: 32px;
        }
    }
</style>
