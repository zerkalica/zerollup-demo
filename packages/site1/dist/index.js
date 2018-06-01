var zerollupDemoSite1 = (function (config) {
    'use strict';

    config = config && config.hasOwnProperty('default') ? config['default'] : config;

    var baseUrl = {
        assets: '/'
    };

    baseUrl.assets = config.assetsUrl;

    //import faceAngel from 'zerollup-demo-lib1/some/face-angel.png'
    var faceAngel = require("./face-angel.png");

    var some = require("./some");

    var faceCool = baseUrl.assets + 'zerollup_demo_lib2/face_cool.png';

    var faceSmile = baseUrl.assets + 'zerollup_demo_site1/face_smile.png'

    function app(node) {
        console.log(node, config, faceAngel, faceCool, faceSmile);
    }

    return app;

}(zerollupDemoSite1Config));
//# sourceMappingURL=index.js.map
