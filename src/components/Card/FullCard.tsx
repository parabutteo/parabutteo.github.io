import React from 'react';
import { AddToBasket } from '../Button/AddToBasket';
import { addItemToCart, removeItemFromCart } from '../../features/cart/cartSlice';
import { useAppDispatch, useAppSelector } from '../../store/hooks';

export interface IFullCard {
  id: string;
  /** Заголовок */
  title: string;
  /** Категория */
  category: string;
  /** Описание */
  details: string;
  /** Цена */
  price: number;
  /** Изображение */
  image: string;
}
/**
 * Детальная карточка товара
 */

export const FullCard: React.FC<IFullCard> = ({ id, title, category, price, details, image }) => {
  const dispatch = useAppDispatch();

  const removeItemFromCartHandler = () => dispatch(removeItemFromCart(id));
  const addItemToCartHandler = () => dispatch(addItemToCart({ id }));
  const cartItems = useAppSelector((state) => state.cart.items);
  const totalQuantity = cartItems.reduce((acc, items) => (id === id ? acc + items.quantity : acc), 0);

  return (
    <article className="card full-card">
      <div className="current-img">
        <img width="100%" src={image} alt="" />
      </div>
      <div className="flex-column align-items-start padding-left-24 inner-12">
        <h2 className="margin-bottom-12">{title}</h2>
        <span className="label margin-bottom-12">{category}</span>
        <p className="margin-bottom-16">{details}</p>
        <span className="margin-bottom-24 txt-bold txt-large">{price}.00&nbsp;₽</span>
        <AddToBasket
          counter={totalQuantity}
          increaseClick={addItemToCartHandler}
          decreaseClick={removeItemFromCartHandler}
        />
      </div>
    </article>
  );
};
