import i18next from "i18next";
import { initReactI18next } from "react-i18next";

i18next.use(initReactI18next).init({
  resources:{
    pt:{},
    en:{},
  },
  lng: 'pt',
})