'use strict';

module.exports = {
    devtool: 'source-map',
    entry: require('./entry.config'),
    output: {
        path         : __dirname + '/../../web/wwwroot/js',
        // path         : __dirname + '/../assets/js',
        filename     : 'bundle.js'
    },
    module: {
        loaders: require('./loaders.config')
    },
    // plugins: require('./plugins.config'),
    externals: {
        'jquery': 'jQuery'
    },
    node: {
        net: 'mock',
        dns: 'mock'
    },
    resolve: {
        extensions: ['', '.js', '.jsx', '.ts', '.tsx', '.web.js', '.webpack.js']
    }
}

