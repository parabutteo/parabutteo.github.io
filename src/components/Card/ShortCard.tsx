import React from 'react';
import { AddToBasket } from '../Button/AddToBasket';
import { useAppDispatch, useAppSelector } from '../../store/hooks';
import { addItemToCart, removeItemFromCart } from '../../features/cart/cartSlice';
import { GET_PROFILE_ID } from '../../graphql/queries/profile';
import { useQuery } from '@apollo/client';
import { ADMIN_ID } from '../../shared/constants';
import { useNavigate } from 'react-router-dom';

export interface IShortCardItem {
  /** Идентификатор */
  id: string;
  /** Заголовок */
  name: string;
  /** Описание */
  details: string;
  /** Цена */
  price: number;
  /** Главное изображение */
  photo: string;
  /** Категория */
  category: string;
}

export interface IShortCard {
  item: IShortCardItem;
}

/**
 * Краткая карточка товара
 *
 * В компоненте присутствуют паттерны "Destructuring props" "обратным" способом
 */

export const ShortCard: React.FC<IShortCard> = ({ item }) => {
  const { name, details, price, photo, category, id } = item;

  const dispatch = useAppDispatch();

  const addItemToCartHandler = (): void => {
    dispatch(addItemToCart({ id: item.id }));
  };

  const removeItemFromCartHandler = (): void => {
    dispatch(removeItemFromCart(item.id));
  };

  const cartItems = useAppSelector((state) => state.cart.items);
  const totalQuantity = cartItems.reduce((acc, items) => (items.id === item.id ? acc + items.quantity : acc), 0);

  // Признак админской роли
  const { data: pid } = useQuery(GET_PROFILE_ID);
  const profileId = pid?.profile?.id || null;
  const isAdminRole = profileId === ADMIN_ID;

  const navigate = useNavigate();

  return (
    <article className="card short-card" onClick={() => navigate(`/card/${id}`)}>
      <img width="100%" src={photo} alt="" />
      <div className="flex-column inner-12">
        <AddToBasket
          counter={totalQuantity}
          increaseClick={addItemToCartHandler}
          decreaseClick={removeItemFromCartHandler}
        />
        <h3 className="margin-top-12 margin-bottom-8">{name}</h3>
        <p className="margin-bottom-12">{details.length > 50 ? `${details.slice(0, 50)}...` : details}</p>
        <span className="margin-bottom-8 txt-bold">{price}.00&nbsp;₽</span>
        {isAdminRole && <span className="txt-gray">ID: {id}</span>}
      </div>
    </article>
  );
};
