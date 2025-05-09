import React from 'react';
import { BasketItem, Button, Layout, Loader } from '../components';
import { useAppSelector } from '../store/hooks';
import { Link } from 'react-router-dom';
import { useMutation } from '@apollo/client';
import { ADD_ORDER } from 'src/graphql/mutations/products';
import { useDispatch } from 'react-redux';
import { clearCart } from 'src/features/cart/cartSlice';

export const Basket: React.FC = () => {
  const dispatch = useDispatch();
  const cartItems = useAppSelector((state) => state.cart.items);
  const [loadingCount, setLoadingCount] = React.useState(0);

  const onItemLoading = (isLoading: boolean) => {
    setLoadingCount((count) => count + (isLoading ? 1 : -1));
  };

  const [addOrder, { data, loading, error }] = useMutation(ADD_ORDER);

  const orderInput = {
    products: cartItems.map((item) => ({
      id: item.id,
      quantity: item.quantity,
    })),
  };

  const handleAddOrder = () => {
    addOrder({ variables: { input: orderInput } })
      .then((response) => {
        console.log('Order ID:', response.data.orders.add.id);
        dispatch(clearCart());
      })
      .catch((error) => console.error(error));
  };

  const emptyBasket = cartItems.length === 0;

  return (
    <Layout title="Корзина">
      {data && (
        <>
          <p>Заказ успешно оформлен! ID: {data.orders.add.id}</p>
          <p className="margin-top-8">
            Перейти к разделу <Link to="/profile/orders">Мои заказы</Link>
          </p>
        </>
      )}

      {emptyBasket && (
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

      {error && <p className="error margin-bottom-24 margin-top-16">Ошибка при оформлении заказа: {error.message}</p>}

      {!emptyBasket && (
        <Button className="primary right clear" onClick={handleAddOrder} disabled={loading}>
          Оформить заказ
        </Button>
      )}
    </Layout>
  );
};
