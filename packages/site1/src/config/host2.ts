// ZEROLLUP_CONFIG_BASE_URL = https://my-host2-static.com/statics/PKG_NAME/PKG_VERSION/
// ZEROLLUP_ENV = development
import baseConfig, {Config} from '.'

export default Object.assign({}, baseConfig, <Config> {
    some: 'host1'
})
