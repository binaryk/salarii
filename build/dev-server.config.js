module.exports = {
    publicPath: '/assets',
    filename: 'bundle.js',
    port: 8080,
    host: '0.0.0.0',
    proxy: {
        '/*': {
            target:{
                "host": "localhost",
                "protocol": 'http:',
                "port": 8079
            },
            secure: false,
            changeOrigin: true,
            bypass: function (req, res, proxyOptions) {
                if (
                    req.url.endsWith('favicon.ico') ||
                    req.url.startsWith('/assets') ||
                    req.url.startsWith('/api') ||
                    req.url.startsWith('/css') ||
                    req.url.startsWith('/fonts')) {
                    return req.url;
                }
                return '/index.html';
            }
        }
    }
}

