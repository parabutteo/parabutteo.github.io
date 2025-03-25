import React from 'react';
import { BasketItem, Layout } from '../components';

export const Basket: React.FC = () => (
  <Layout>
    <h1 className="margin-bottom-32">Корзина</h1>
    <BasketItem
      title="Жилетка"
      price={4000}
      image="https://github.com/parabutteo/cdn.parabutteo.github.io/blob/master/clothes_shop/category_1/4_1.jpg?raw=true"
    />
  </Layout>
);
