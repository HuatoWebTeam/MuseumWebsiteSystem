
const path = require('path');
const webpack = require('webpack');

module.exports = {
    entry: {
        vendor: ['react', 'react-dom', 'react-router-dom', 'antd', 'echarts', 'classnames']
    },
    output: {
        path: path.join(__dirname, 'src/assets/lib'),
        filename: '[name].dll.js',
        library: '[name]_library'
    },
    plugins: [
        new webpack.DllPlugin({
            path: path.join(__dirname, 'src/assets/lib', '[name]-manifest.json'),
            name: '[name]_library'
        })
    ]
}