import { Profile } from './Profile';
import { Basket } from './Basket';
import { Catalog } from './Catalog';
import { Magic } from './Magic';
import { Auth } from './Auth';
import { Admin } from './Admin';

export const routes = [
  {
    path: 'auth',
    component: Auth,
    isAuth: false,
  },
  {
    path: '',
    component: Catalog,
    isAuth: false,
  },
  {
    path: 'profile',
    component: Profile,
    isAuth: false,
  },
  {
    path: 'basket',
    component: Basket,
    isAuth: false,
  },
  {
    path: 'admin',
    component: Admin,
    isAuth: false,
  },
  {
    path: 'magic',
    component: Magic,
    isAuth: true,
  },
];
