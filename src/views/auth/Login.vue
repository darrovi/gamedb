<template>
    <section>
        <h1>Login</h1>
        <h2>header 2</h2>
        <h3>header 3</h3>
        <h4>header 4</h4>

        <div>
            <button> Botón normal</button>
            <button disabled> Botón deshabilitado</button>
            <button danger> Botón danger</button>
        </div>

        <form>
            <fieldset>
                <label for="input">Label</label>
                <input id="input" type="text"/>
            </fieldset>
            <fieldset>
                <label required for="required">Required</label>
                <input id="required" type="text"/>
            </fieldset>
            <fieldset>
                <label for="email">Email (valida el correo)</label>
                <input id="email" type="email"/>
            </fieldset>
            <fieldset>
                <label for="disabled">Label disabled</label>
                <input id="disabled" type="text" disabled/>
            </fieldset>
        </form>

        <div>
            <h1>paragraph</h1>
            <p>
                Una <i>pseudoclase</i> CSS es <b>una</b> palabra clave que se añade a los selectores y que especifica un
                estado
                especial del elemento seleccionado. Por ejemplo, :hover aplicará un estilo cuando el usuario haga hover
                sobre el elemento especificado por el selector.
            </p>
            <h1>span</h1>
            <span>
                Una pseudoclase CSS es una palabra clave que se añade a los selectores y que especifica un estado
                especial del elemento seleccionado. Por ejemplo, :hover aplicará un estilo cuando el usuario haga hover
                sobre el elemento especificado por el selector.
            </span>
        </div>

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
        name: "Login"
    }
</script>

<style scoped>

</style>
