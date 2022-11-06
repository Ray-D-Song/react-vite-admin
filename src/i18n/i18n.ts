import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import enJson from './lang/en.json'
import zhJson from './lang/zh_CN.json'

const resources: any = {
  en: {
    translation: enJson
  },
  zh_CN: {
    translation: zhJson
  }
}

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: 'zh_CN',

    interpolation: {
      escapeValue: false
    }
  })

  export default i18n