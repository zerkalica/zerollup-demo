(function (config) {
    'use strict';

    var config__default = 'default' in config ? config['default'] : config;

    var baseUrl = {
        assets: '/i/'
    };

    baseUrl.assets = config.assetsUrl;

    var faceAngel = baseUrl.assets + 'zerollup_demo_lib1/face_angel.png';

    var some = require("./some");

    var faceCool = baseUrl.assets + 'zerollup_demo_lib2/face_cool.png';

    var faceSmile = baseUrl.assets + 'zerollup_demo_site1/face_smile.png';

    var node = document.getElementById('zerollup_demo_site1');
    console.log(node, config, faceAngel, faceCool, faceSmile);

}(zerollupDemoSite1Config));
//# sourceMappingURL=index.js.map
