/** ZEROLLUP_CONFIG_BASE_URL: / **/
var configBaseUrl = 'ZEROLLUP_CONFIG_BASE_URL';
var config = {
    some: 'index',
    configBaseUrl: configBaseUrl,
    assetsUrl: configBaseUrl + "/i"
};

// ZEROLLUP_CONFIG_BASE_URL = https://my-host1-static.com/statics/PKG_NAME/PKG_VERSION/
var host1 = Object.assign({}, config, {
    some: 'host1'
});

export default host1;
