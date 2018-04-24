var zerollupDemoSite1 = (function (config) {
    'use strict';

    config = config && config.hasOwnProperty('default') ? config['default'] : config;

    var baseUrl = {
        assets: '/'
    };

    baseUrl.assets = config.assetsUrl;

    var faceAngel = baseUrl.assets + "zerollup_demo_lib1/face_angel.png";

    function app(node) {
        console.log(node, config, faceAngel);
    }

    return app;

}(zerollupDemoSite1Config));
//# sourceMappingURL=index.js.map
