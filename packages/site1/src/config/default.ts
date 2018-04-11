import {config} from '@zerollup/injector'

const appConfig = {
    some: 'site1-default',
    assetsUrl: '/site1-root/'
}
config.assetsUrl = appConfig.assetsUrl

export default appConfig
