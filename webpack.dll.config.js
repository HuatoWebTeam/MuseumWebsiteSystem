
const path = require('path');
const webpack = require('webpack');

module.exports = {
    entry: {
        vendor: ['react', 'react-dom', 'react-router-dom', 'antd']
    },
    output: {
        path: path.join(__dirname, 'src/lib'),
        filename: '[name].dll.js',
        library: '[name]_library'
    },
    plugins: [
        new webpack.DllPlugin({
            path: path.join(__dirname, 'src/lib', '[name]-manifest.json'),
            name: '[name]_library'
        })
    ]
}