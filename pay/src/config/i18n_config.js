import Vue from 'vue';
import VueI18n from 'vue-i18n';
import locale from 'element-ui/lib/locale';
import { zhcn } from './lang/zh_cn';
import { zhtw } from './lang/zh_tw';
import { en } from './lang/en';
import { vi } from './lang/vi';

Vue.use(VueI18n);

// 以下为语言包单独设置的场景，单独设置时语言包需单独引入
const messages = {
  zh_cn: zhcn, // 简体中文语言包
  zh_tw: zhtw, // 繁体中文语言包
  en_us: en, // 英文语言包
  vi_vn: vi, // 英文语言包
};

const i18n = new VueI18n({
  locale: 'zh_cn', // set locale 默认显示中文
  messages: messages, // set locale messages
});

locale.i18n((key, value) => i18n.t(key, value)); //为了实现element插件的多语言切换

export default i18n;
