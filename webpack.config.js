const path = require('path');
const CopyWebpackPlugin = require('copy-webpack-plugin');

const srcPath = 'src dir (x86)';
const targetPath = 'target dir (x86)';

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
