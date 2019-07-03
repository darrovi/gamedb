module.exports = {
    css: {
        loaderOptions: {
            sass: {
                data: `
                    @import "@/assets/styles/theme.scss";
                    @import "@/assets/styles/globals.scss";
                    @import "@/assets/styles/reset.scss";
                `
            }
        }
    }
};
