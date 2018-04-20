var zerollupDemoSite1 = (function (config) {
    'use strict';

    config = config && config.hasOwnProperty('default') ? config['default'] : config;

    var config$1 = {
        assetsUrl: '/'
    };

    config$1.assetsUrl = config.assetsUrl;

    var faceAngel = config$1.assetsUrl + "zerollup_demo_lib1/face_angel.png";

    function app(node) {
        console.log(node, config, faceAngel);
    }

    return app;

}(zerollupDemoSite1Config));
//# sourceMappingURL=index.development.js.map
