import React from 'react';
import { AddToBasket } from '../Button/AddToBasket';
import './card.scss';

export interface IFullCard {
  /** Заголовок */
  title: string;
  /** Категория */
  category: string;
  /** Описание */
  details: string;
  /** Цена */
  price: number;
  /** Изображения */
  image: string[];
}

export const FullCard: React.FC<IFullCard> = ({ title, category, price, details, image }) => (
  <article className="card full-card">
    <div className="galery">
      <div className="current-img">
        {image?.map((item, index) => index === 0 && <img width="100%" src={item} alt="" key={index} />)}
      </div>
      <div className="galery-img flex-column">
        {image?.map((item, index) => (
          <img width="100%" src={item} alt="" key={index} />
        ))}
      </div>
    </div>
    <div className="flex-column align-items-start padding-left-24 inner-12">
      <h2 className="margin-bottom-12">{title}</h2>
      <span className="label margin-bottom-12">{category}</span>
      <p className="margin-bottom-16">{details}</p>
      <span className="margin-bottom-24 txt-bold txt-large">{price}.00&nbsp;₽</span>
      <AddToBasket counter={0} isDisabled />
    </div>
  </article>
);
