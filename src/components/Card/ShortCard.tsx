import React from 'react';
import { AddToBasket } from '../Button/AddToBasket';
import './card.scss';

export interface IShortCard {
  title: string;
  details: string;
  price: number;
  image: string;
}

export const ShortCard: React.FC<IShortCard> = ({ title, price, details, image }) => (
  <article className="card short-card">
    <img width="100%" src={image} alt="" />
    <div className="flex-column padding-12">
      <AddToBasket counter={0} isDisabled />
      <h3 className="margin-top-12 margin-bottom-8">{title}</h3>
      <p className="margin-bottom-12">{details.length > 50 ? `${details.slice(0, 50)}...` : details}</p>
      <span className="margin-bottom-8 txt-bold">{price}.00&nbsp;₽</span>
    </div>
  </article>
);
