import { createI18n } from 'vue-i18n'

import en from './locales/en.json'
import hun from './locales/hun.json'

const messages = {
  en,
  hun
}

const i18n = createI18n({
  locale: process.env.VUE_APP_I18N_LOCALE || "en",
  allowCompositoin: true, // you need to specify that!
  fallbackLocale: process.env.VUE_APP_I18N_FALLBACK_LOCALE || "en",
  messages: messages,
});

export default i18n
