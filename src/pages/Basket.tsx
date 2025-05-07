import React from 'react';
import { BasketItem, Layout, Loader } from '../components';
import { useAppSelector } from '../store/hooks';
import { Link } from 'react-router-dom';

export const Basket: React.FC = () => {
  const cartItems = useAppSelector((state) => state.cart.items);
  const [loadingCount, setLoadingCount] = React.useState(0);

  const onItemLoading = (isLoading: boolean) => {
    setLoadingCount((count) => count + (isLoading ? 1 : -1));
  };

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

      {loadingCount > 0 && <Loader />}

      {cartItems.map((item) => (
        <BasketItem key={item.id} id={item.id} counter={item.quantity} onLoading={onItemLoading} />
      ))}
    </Layout>
  );
};
