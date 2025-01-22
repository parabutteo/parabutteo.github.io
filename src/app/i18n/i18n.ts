import * as i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const resources = {
  en: {
    translation: {
      header: {
        main: 'Home',
        'about-us': 'About us',
        contacts: 'Contacts',
      },
    },
  },
  ru: {
    translation: {
      header: {
        main: 'Главная',
        'about-us': 'О нас',
        contacts: 'Контакты',
      },
    },
  },
};

i18n.use(initReactI18next).init({
  resources,
  lng: 'ru',
});

export default i18n;
