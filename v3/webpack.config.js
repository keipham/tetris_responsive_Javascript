const path = require('path')

module.exports = {
    mode: 'development',
    devServer: {
        liveReload: true,
    },
    entry: { // entry point for ES6, ES7 or whatever in src folder
        app: './src/tetris_script.js'
    },
    devServer: {
        static: './dist',
    },
    output: { // the compiled version will be output in ./dist/app.bundle.js' which is to include into the html file
        path: path.resolve(__dirname, 'dist'),
        filename: 'app.bundle.js'
    },
    module: {
        rules: [{
            test: /\.js$/,
            exclude: /node_modules/,
            use: {
                loader: 'babel-loader',
                options: {
                    presets: ['@babel/preset-env']
                }
            }
        }]
    }
}