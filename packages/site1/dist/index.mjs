/** ZEROLLUP_CONFIG_BASE_URL: / **/
var configBaseUrl = 'ZEROLLUP_CONFIG_BASE_URL';
var config = {
    some: 'index',
    configBaseUrl: configBaseUrl,
    assetsUrl: configBaseUrl + "/i"
};

// import faceAngel from './face-angel.png'
var faceAngel = 'test';

function app(node) {
    console.log(node, config, faceAngel);
}

export default app;
