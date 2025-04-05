import React from 'react';
import { BasketItem, Layout } from '../components';
import { useAppSelector } from '../store/hooks';
import { Link } from 'react-router-dom';

export const Basket: React.FC = () => {
  const cartItems = useAppSelector((state) => state.cart.items);

  return (
    <Layout title="Корзина">
      {cartItems.length === 0 && (
        <>
          <p className="margin-top-32">Корзина пуста.</p>
          <p className="margin-top-8">
            Вы можете вернуться на <Link to="/">главную</Link>.
          </p>
        </>
      )}

      {cartItems.map((item) => (
        <BasketItem key={item.id} id={item.id} counter={item.quantity} />
      ))}
    </Layout>
  );
};
