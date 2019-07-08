module.exports = {
    css: {
        loaderOptions: {
            sass: {
                data: `
                    @import "@/assets/styles/theme.scss";
                    @import "@/assets/styles/globals.scss";
                    @import "@/assets/styles/reset.scss";
                    @import "@/assets/styles/common.scss";
                `
            }
        }
    },

    pluginOptions: {
      i18n: {
        locale: 'en',
        fallbackLocale: 'en',
        localeDir: 'locales',
        enableInSFC: true
      }
    }
};
