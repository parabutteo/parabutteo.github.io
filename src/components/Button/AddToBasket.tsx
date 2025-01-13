import React from 'react';
import { Button } from './Button';

interface IAddToBasket {
  children: React.ReactNode | React.ReactNode[] | string;
  counter: number;
}

export const AddToBasket: React.FC<IAddToBasket> = ({ counter, children }) => {
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
    <Button className="primary">
      {children}
      <i className="margin-left-12 fa fa-shopping-cart" />
    </Button>
  );
};
