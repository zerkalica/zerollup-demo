// ZEROLLUP_CONFIG_BASE_URL = https://my-host1-static.com/statics/PKG_NAME/PKG_VERSION/
import baseConfig, {Config} from './default'

export default Object.assign({}, baseConfig, <Config> {
    some: 'host1',
})
