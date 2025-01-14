import React from 'react';
import { Button } from './Button';
import clsx from 'clsx';

interface IAddToBasket {
  /** Счетчик позиций */
  counter: number;
  /** Признак заблокированности кнопки */
  isDisabled?: boolean;
}

/**
 * Компонент кнопки "добавить в корзину"
 *
 * В качестве пропсов принимает признак isDisabled, указывающий на блокировку кнопки
 *
 * и counter для определения количества добавленных позиций
 */

export const AddToBasket: React.FC<IAddToBasket> = ({ counter, isDisabled }) => {
  if (counter > 0) {
    return (
      <div className={clsx('counter', 'flex-row', 'align-items-center', isDisabled && 'disabled')}>
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
