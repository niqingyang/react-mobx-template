import {stores, namespace} from 'mobx-react-stores';
import global from './global';
import setting from './setting';
import Locale from './locale';

stores.add(global);
stores.add(setting);

const translations = {
    'zh-CN': {
        messages: {
            ...require('../locales/zh-CN.js').default,
        },
        locale: 'zh-CN',
        antd: require('antd/lib/locale-provider/zh_CN'),
        data: require('react-intl/locale-data/zh'),
        momentLocale: 'zh-cn',
    }
};

stores.add(new Locale('zh-CN', translations), 'locale');

export default stores;