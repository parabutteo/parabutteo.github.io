import React from 'react';
import { AddToBasket } from '../Button/AddToBasket';
import { useAppDispatch } from '../../store/hooks';
import { addItemToCart, removeFromCart, removeItemFromCart } from '../../features/cart/cartSlice';
import { useQuery } from '@apollo/client';
import { GET_PRODUCT } from 'src/graphql/queries/products';

interface IBasketItem {
  id: string;
  counter: number;
  onLoading: (loading: boolean) => void;
}

/**
 * Карточка товара из корзины
 *
 * В компоненте присутсвтует паттерн "Render prop"
 */

export const BasketItem: React.FC<IBasketItem> = ({ id, counter, onLoading }) => {
  const dispatch = useAppDispatch();

  const { data, loading, error } = useQuery(GET_PRODUCT, {
    variables: { getOneId: id },
  });

  const prevLoadingRef = React.useRef<boolean>(false);

  React.useEffect(() => {
    if (prevLoadingRef.current !== loading) {
      onLoading(loading);
      prevLoadingRef.current = loading;
    }
  }, [loading, onLoading]);

  if (loading) return null;

  if (error) return <p>Ошибка загрузки товара</p>;

  const product = data.products.getOne;
  const price = product.price * counter;

  const removeFromCartHandler = () => dispatch(removeFromCart(id));
  const addItemToCartHandler = () => dispatch(addItemToCart({ id }));
  const removeItemFromCartHandler = () => dispatch(removeItemFromCart(id));

  return (
    <article className="card basket-card flex-row margin-bottom-24">
      <img width="100%" src={product.photo} alt={product.name} />
      <div className="flex-column align-items-start padding-left-24 inner-12">
        <h3 className="margin-bottom-8">{product.name}</h3>
        <span className="margin-bottom-12 txt-bold">{price}.00&nbsp;₽</span>
        <AddToBasket counter={counter} increaseClick={addItemToCartHandler} decreaseClick={removeItemFromCartHandler} />
        <button className="icon-btn delete-btn" onClick={removeFromCartHandler}>
          <i className="fa fa-trash" />
        </button>
      </div>
    </article>
  );
};
