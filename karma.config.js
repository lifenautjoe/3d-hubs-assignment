'use strict';

module.exports = function (config) {
    config.set({
        browsers : [
            'PhantomJS'
        ],
        reporters : [
          'progress'
        ],
        frameworks: ['jspm', 'jasmine'],
        proxies: {
            '/app/': '/base/app/',
            '/storage/': '/base/storage/',
            '/jspm_packages/': '/base/jspm_packages/',
            '/typings/': '/base/typings/'
        },
        jspm: {
            useBundles: true,
            browser: "jspm.browser.js",
            config: "jspm.config.js",
            loadFiles: ['app/main.ts', 'app/**/*.spec.ts'],
            serveFiles: [
                'app/**/*.+(ts|html|css|scss|json)',
                'storage/**/*.*',
                'typings/**/*.*'
            ]
        },
        files : [
        ]
    });
};