module.exports = {
    outputDir: 'wwwroot',
    baseUrl: "/",
    chainWebpack: config => {
        // aspnet uses the other hmr so remove this one
        config.plugins.delete('hmr');
    }
}