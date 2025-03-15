import * as i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const resources = {
  en: {
    translation: {
      header: {
        profile: 'Profile',
        'admin-panel': 'Admin panel',
        basket: 'Basket',
      },
    },
  },
  ru: {
    translation: {
      header: {
        profile: 'Профиль',
        'admin-panel': 'Панель администратора',
        basket: 'Корзина',
      },
    },
  },
};

i18n.use(initReactI18next).init({
  lng: 'ru',
  resources,
});

export default i18n;
