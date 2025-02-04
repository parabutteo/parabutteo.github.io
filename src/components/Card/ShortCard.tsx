import React from 'react';
import { AddToBasket } from '../Button/AddToBasket';

export interface IShortCardItem {
  /** Идентификатор */
  id: number;
  /** Заголовок */
  title: string;
  /** Описание */
  details: string;
  /** Цена */
  price: number;
  /** Главное изображение */
  image: string;
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
  const { title, details, price, image } = item;

  return (
    <article className="card short-card">
      <img width="100%" src={image} alt="" />
      <div className="flex-column inner-12">
        <AddToBasket counter={0} isDisabled />
        <h3 className="margin-top-12 margin-bottom-8">{title}</h3>
        <p className="margin-bottom-12">{details.length > 50 ? `${details.slice(0, 50)}...` : details}</p>
        <span className="margin-bottom-8 txt-bold">{price}.00&nbsp;₽</span>
      </div>
    </article>
  );
};
