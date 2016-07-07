'use strict';

module.exports = {
    entry: require('./entry.config'),
    output: {
        path         : __dirname + '/../../web/wwwroot/js',
        filename     : 'bundle.min.js'
    },
    module: {
        loaders:  require('./loaders.config')
    },
    externals: {
        'jquery': 'jQuery'
    },
    node: {
        net: 'mock',
        dns: 'mock'
    },
    resolve: {
        // Allow to omit extensions when requiring these files
        extensions: ['', '.js', '.jsx', '.ts', '.tsx', '.web.js', '.webpack.js']
    }
}