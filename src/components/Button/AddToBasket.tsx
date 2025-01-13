import React from 'react';
import { Button } from './Button';

interface IAddToBasket {
  counter: number;
  isDisabled?: boolean;
}

export const AddToBasket: React.FC<IAddToBasket> = ({ counter, isDisabled }) => {
  if (counter > 0) {
    return (
      <div className="counter flex-row align-items-center">
        <Button>
          <i className="fa fa-minus" />
        </Button>
        <input type="number" defaultValue={counter} />
        <Button>
          <i className="fa fa-plus" />
        </Button>
      </div>
    );
  }

  return (
    <Button className="primary" disabled={isDisabled}>
      Добавить в корзину
      <i className="margin-left-12 fa fa-shopping-cart" />
    </Button>
  );
};
