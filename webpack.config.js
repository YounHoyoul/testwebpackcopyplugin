const path = require('path');
const CopyWebpackPlugin = require('copy-webpack-plugin');

const srcPath = 'source';
const targetPath = 'target';

module.exports = {
    mode: 'development',
    entry: {
        main: './src/index.js'
    },
    plugins: [
        new CopyWebpackPlugin([
            {
                from: path.resolve(__dirname, `${srcPath}/test.txt`),
                to: path.resolve(__dirname, `${targetPath}/test.txt`)
            }
        ]),
    ]
};
