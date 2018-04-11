(function () {
    'use strict';

    var config = {
        assetsUrl: '/'
    };

    var appConfig = {
        some: 'site1-default',
        assetsUrl: '/site1-root/'
    };
    config.assetsUrl = appConfig.assetsUrl;

    var faceAngel = config.assetsUrl + "zerollup_demo_lib1/face_angel.png";

    function app(config) {
        console.log(config, faceAngel);
    }

    app(appConfig);

}());
//# sourceMappingURL=index.js.map
