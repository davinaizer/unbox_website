({
    appDir: './app',
    baseUrl: 'js',
    dir: './dist',
    optimize: "uglify2",
    optimizeCss: 'standard',
    removeCombined: true,
    preserveLicenseComments: false,
    paths: {
        backbone: 'libs/backbone-min',
        jquery: 'libs/jquery.min',
        lodash: 'libs/lodash.min',
        text: 'libs/text',
        bootstrap: 'libs/bootstrap.min',
        TweenMax: "libs/TweenMax.min"
    },
    shim: {
        lodash: {
            exports: '_'
        }
    },
    map: {
        '*': {
            'underscore': 'lodash'
        }
    },
    modules: [
        {
            name: 'main',
            include: []
        }
    ]
})