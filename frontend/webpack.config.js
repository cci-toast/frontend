var path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    devtool: 'sourcemaps',
    cache: true,
    mode: 'development',
    entry: {
        ClientPlan: './src/routes/ClientScreens/ClientPlan.js',
        ClientProfile: './src/routes/ClientScreens/ClientProfile.js',
        ClientAdvisorContact: './src/routes/ClientScreens/ClientAdvisorContact.js',
        ClientActionItems: './src/routes/ClientScreens/ClientActionItems.js',
        index:'./src/index.js',
    },
    plugins: [
        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: path.resolve(__dirname, 'public', 'index.html')
        }),
    ],
    output: {
        filename: '[name].bundle.js',
        path: path.resolve(__dirname, 'dist'),
    },
    optimization: {
        splitChunks: {
            chunks: 'all',
        },
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /(node_modules)/,
                use: [{
                    loader: 'babel-loader',
                    options: {
                        presets: [
                            "@babel/preset-env", 
                            "@babel/preset-react"
                        ],
                        plugins: [
                            '@babel/plugin-proposal-class-properties', 
                            ['@babel/plugin-proposal-decorators', { 'legacy': true }]
                        ],
                    }
                }]
            },
            {
                test: /\.css$/,
                use: [
                    'style-loader',
                    'css-loader'
                ]
            },
            {
                test: /\.(png|svg|jpg|gif)$/,
                use: [
                    'file-loader'
                ]
            },
            {
                test: /\.(woff|woff2|eot|ttf|otf)$/,
                use: [
                    'file-loader'
                ]
            }
        ]
    }
};