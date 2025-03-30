import React from 'react';
import { AddToBasket } from '../Button/AddToBasket';
import { useAppDispatch } from '../../store/hooks';
import { addItemToCart, removeFromCart, removeItemFromCart } from '../../features/cart/cartSlice';

export interface IBasketItem {
  /** Идентификатор */
  id: number;
  /** Заголовок */
  title: string;
  /** Цена */
  price: number;
  /** Изображение */
  image: string;
  /** Количество */
  counter: number;
}

/**
 * Карточка товара из корзины
 *
 * В компоненте присутсвтует паттерн "Render prop"
 */

export const BasketItem: React.FC<IBasketItem> = ({ id, title, price, image, counter }) => {
  const dispatch = useAppDispatch();
  const removeFromCartHandler = (): void => {
    dispatch(removeFromCart(id));
  };
  const addItemToCartHandler = (): void => {
    dispatch(addItemToCart({ id: id, title: title, price: price }));
  };

  const removeItemFromCartHandler = (): void => {
    dispatch(removeItemFromCart(id));
  };

  return (
    <article className="card basket-card flex-row margin-bottom-24">
      <img width="100%" src={image} alt="" />
      <div className="flex-column align-items-start padding-left-24 inner-12">
        <h3 className="margin-bottom-8">{title}</h3>
        <span className="margin-bottom-12 txt-bold">{price}.00&nbsp;₽</span>
        <AddToBasket counter={counter} increaseClick={addItemToCartHandler} decreaseClick={removeItemFromCartHandler} />
        <button className="icon-btn delete-btn" onClick={removeFromCartHandler}>
          <i className="fa fa-trash" />
        </button>
      </div>
    </article>
  );
};
