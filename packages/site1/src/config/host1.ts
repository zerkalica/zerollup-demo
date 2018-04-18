// ZEROLLUP_CONFIG_BASE_URL = https://my-host1-static.com/statics/PKG_NAME/PKG_VERSION/
import baseConfig, {Config} from '.'

const config: Config = {
    ...baseConfig,
    some: 'host'
}

export default config