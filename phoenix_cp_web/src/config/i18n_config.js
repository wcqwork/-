import { createI18n } from 'vue-i18n';
import { zhcn } from './lang/zh_cn';
import { zhtw } from './lang/zh_tw';
import { en } from './lang/en';
import { vi } from './lang/vi';

// 以下为语言包单独设置的场景，单独设置时语言包需单独引入
const messages = {
  zh_cn: zhcn, // 简体中文语言包
  zh_tw: zhtw, // 繁体中文语言包
  en_us: en, // 英文语言包
  vi_vn: vi, // 英文语言包
};

const i18n = createI18n({
  legacy: false,
  globalInjection: true,
  locale: localStorage.getItem('language') || 'zh_cn',
  messages
});

export default i18n;


