import React from 'react';
import { AddToBasket } from '../Button/AddToBasket';
import './card.scss';

export interface IBasketItem {
  title: string;
  category: string;
  details: string;
  price: number;
  image: string;
}

export const BasketItem: React.FC<IBasketItem> = ({ title, category, price, details, image }) => (
  <article className="card basket-card flex-row">
    <img width="100%" src={image} alt="" />
    <div className="flex-column align-items-start padding-left-24 inner-12">
      <h3 className="margin-bottom-8">{title}</h3>
      <span className="margin-bottom-12 txt-bold">{price}.00&nbsp;₽</span>
      <AddToBasket counter={1} isDisabled />
      <button className="icon-btn delete-btn">
        <i className="fa fa-trash" />
      </button>
    </div>
  </article>
);
