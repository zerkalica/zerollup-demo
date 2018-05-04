var zerollupDemoSite1Config = (function () {
    'use strict';

    /** https://my-host1-static.com/statics/zerollup_demo_site1/1.0.1/: / **/
    var configBaseUrl = 'https://my-host1-static.com/statics/zerollup_demo_site1/1.0.1/';
    var config = {
        some: 'index',
        configBaseUrl: configBaseUrl,
        assetsUrl: configBaseUrl + "i"
    };

    // https://my-host1-static.com/statics/zerollup_demo_site1/1.0.1/ = https://my-host1-static.com/statics/zerollup_demo_site1/1.0.1/
    var host1 = Object.assign({}, config, {
        some: 'host1'
    });

    return host1;

}());
