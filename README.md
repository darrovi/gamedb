# gamesdb

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Deploy to firebase
```
npm run deploy
```

### Run your tests
```
npm run test
```

### Lints and fixes files
```
npm run lint
```

## Styles
Para que las variables y clases definidas puedan ser utilizadas en cualquier parte de la aplicación hay que añadir los ficheros al archivo `vue.config.js`

### Reset (@/assets/styles/reset.scss)
En este fichero se han sobreescrito los tags HTML para seguir el diseño de la aplicación. Siempre que sea posible utilizar estos elementos.

### Globals (@/assets/styles/globals.scss)
En este fichero se encontrarán las variables SCSS globales que quieran utilizarse en otros componentes

### Common (@/assets/styles/common.scss)
En este fichero se encontrarán las clases que vayan a utilizarse en otros componentes

### Theme (@/assets/styles/theme.scss)
En este fichero se han definido las variables CSS de tal forma que más adelante puedan cambiarse los temas de la aplicación


## Internationalization
En la carpeta @/locales se encuentran los distintos ficheros para los mensajes de cada idioma (por ahora solo español). Las traducciones pueden utilizarse en cualquier parte, por ejemplo: `{{$t('user.title')}}`

[Documentación oficial](https://kazupon.github.io/vue-i18n/started.html)
