
module.exports = {
    //entry : './src/js/index.js',
    mode: 'development',
    entry: ['@babel/polyfill', './src/js/index.js'],
    output: {
        path: `${__dirname}/dist/js`,
        filename: 'bundle.js'
    },
    watch: true,
    cache: false,
    devtool: 'source-map',
    devServer: {
        contentBase: `${__dirname}/dist`,
        watchContentBase: true,
        publicPath: '/js/',
        host: "0.0.0.0",
        port: 777,
        allowedHosts: [
            'es6.tescik.ovh'
        ]
                //disableHostCheck: true
    },
    module: {
        rules: [
            {
                test: /\.m?js$/,
                exclude: /(node_modules|bower_components)/,
                use: {
                    loader: 'babel-loader',
                    options:
                            {
                                presets: ['babel-preset-env']
                            }
                }
            },
            {
                test: /\.css$/,
                use: [
                    {loader: "style-loader"},
                    {loader: "css-loader"}
                ]
            },
            {
                test: /\.s[ac]ss$/i,
                use: [
                    "style-loader",
                    // Translates CSS into CommonJS
                    "css-loader",
                    // Compiles Sass to CSS
                    "sass-loader"
                ],
            }
        ]
    }
};
