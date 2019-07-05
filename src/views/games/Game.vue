<template>
    <section class="game" v-if="game" @scroll="onScroll">
        <header class="game__header">
            <h1>{{game.name}}</h1>
            <router-link to="/games">
                <img src="@/assets/icons/close--white.svg">
            </router-link>

            <div id="game-image" class="game__image" v-bind:style="{ backgroundImage: 'url(' + game.image + ')' }">
                <div class="game__image-gradient"></div>
            </div>

        </header>

        <div class="game__content" padding>
            <h2>Información</h2>

            <p>Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido
                el texto de relleno estándar de las industrias desde el año 1500, cuando un impresor (N. del T. persona
                que se dedica a la imprenta) desconocido usó una galería de textos y los mezcló de tal manera que logró
                hacer un libro de textos especimen. No sólo sobrevivió 500 años, sino que tambien ingresó como texto de
                relleno en documentos electrónicos, quedando esencialmente igual al original. Fue popularizado en los
                60s con la creación de las hojas "Letraset", las cuales contenian pasajes de Lorem Ipsum, y más
                recientemente con software de autoedición, como por ejemplo Aldus PageMaker, el cual incluye versiones
                de Lorem Ipsum.

                ¿Por qué lo usamos?
                Es un hecho establecido hace demasiado tiempo que un lector se distraerá con el contenido del texto de
                un sitio mientras que mira su diseño. El punto de usar Lorem Ipsum es que tiene una distribución más o
                menos normal de las letras, al contrario de usar textos como por ejemplo "Contenido aquí, contenido
                aquí". Estos textos hacen parecerlo un español que se puede leer. Muchos paquetes de autoedición y
                editores de páginas web usan el Lorem Ipsum como su texto por defecto, y al hacer una búsqueda de "Lorem
                Ipsum" va a dar por resultado muchos sitios web que usan este texto si se encuentran en estado de
                desarrollo. Muchas versiones han evolucionado a través de los años, algunas veces por accidente, otras
                veces a propósito (por ejemplo insertándole humor y cosas por el estilo).


                ¿De dónde viene?
                Al contrario del pensamiento popular, el texto de Lorem Ipsum no es simplemente texto aleatorio. Tiene
                sus raices en una pieza cl´sica de la literatura del Latin, que data del año 45 antes de Cristo,
                haciendo que este adquiera mas de 2000 años de antiguedad. Richard McClintock, un profesor de Latin de
                la Universidad de Hampden-Sydney en Virginia, encontró una de las palabras más oscuras de la lengua del
                latín, "consecteur", en un pasaje de Lorem Ipsum, y al seguir leyendo distintos textos del latín,
                descubrió la fuente indudable. Lorem Ipsum viene de las secciones 1.10.32 y 1.10.33 de "de Finnibus
                Bonorum et Malorum" (Los Extremos del Bien y El Mal) por Cicero, escrito en el año 45 antes de Cristo.
                Este libro es un tratado de teoría de éticas, muy popular durante el Renacimiento. La primera linea del
                Lorem Ipsum, "Lorem ipsum dolor sit amet..", viene de una linea en la sección 1.10.32

            </p>
        </div>

    </section>
</template>

<script>

    const SCROLL_CONTENT_MARGIN_TOP = 136;
    const IMAGE_SIZE = 200;
    export default {
        name: "Game",
        computed: {
            game() {
                return this.$store.getters['games/currentGame']
            }
        },
        created() {
            this.$store.dispatch('games/setCurrentGame', this.$route.params.id);
        },
        mounted() {
            document.addEventListener('scroll', this.onScroll)
        },
        destroyed() {
          document.removeEventListener('scroll', this.onScroll)
        },
        methods: {
            onScroll() {
                const imageEl = document.getElementById('game-image');
                if (window.scrollY < SCROLL_CONTENT_MARGIN_TOP) {
                    imageEl.style.height = (IMAGE_SIZE - window.scrollY) + 'px';
                } else {
                    imageEl.style.height = IMAGE_SIZE - SCROLL_CONTENT_MARGIN_TOP + 'px';
                }
            }
        }
    }
</script>

<style scoped lang="scss">
    .game {
        &__header {
            display: flex;
            width: 100%;
            padding: 16px;
            box-sizing: border-box;
            z-index: 900;
            position: fixed;
            top: 0;
            left: 0;

            h1 {
                margin-right: auto;
            }

            a {
                display: flex;
            }

            img {
                margin-left: 16px;

                &:active {
                    opacity: 0.5;
                }
            }
            background: transparent;

            h1, img {
                text-shadow: 0 0 4px black;
                color: white;
            }
        }

        &__image {
            width: 100%;
            height: 200px;
            background-size: cover;
            background-position: center;
            position: absolute;
            top: 0;
            right: 0;
            z-index: -1;
        }

        &__image-gradient {
            height: 100%;
            width: 100%;
            background: rgba(13, 13, 13, 0);
            background: -moz-linear-gradient(top, rgba(13, 13, 13, 0) 0%, rgba(13, 13, 13, 1) 100%);
            background: -webkit-gradient(left top, left bottom, color-stop(0%, rgba(13, 13, 13, 0)), color-stop(100%, rgba(13, 13, 13, 1)));
            background: -webkit-linear-gradient(top, rgba(13, 13, 13, 0) 0%, rgba(13, 13, 13, 1) 100%);
            background: -o-linear-gradient(top, rgba(13, 13, 13, 0) 0%, rgba(13, 13, 13, 1) 100%);
            background: -ms-linear-gradient(top, rgba(13, 13, 13, 0) 0%, rgba(13, 13, 13, 1) 100%);
            background: linear-gradient(to bottom, rgba(13, 13, 13, 0) 0%, rgba(13, 13, 13, 1) 100%);
            filter: progid:DXImageTransform.Microsoft.gradient(startColorstr='#0d0d0d', endColorstr='#0d0d0d', GradientType=0);
        }

        &__content {
            // Tamaño de imagen menos tamaño del header
            margin-top: calc(136px + 62px);
        }
    }
</style>
