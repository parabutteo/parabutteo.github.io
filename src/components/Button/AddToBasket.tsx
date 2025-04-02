import React from 'react';
import { Button } from './Button';
import clsx from 'clsx';

interface IAddToBasket {
  /** Счетчик позиций */
  counter: number;
  /** Признак заблокированности кнопки */
  isDisabled?: boolean;
  /** Хендлер клика при добавлении */
  increaseClick: () => void;
  /** Хендлер клика при удалении */
  decreaseClick: () => void;
}

/**
 * Кнопка "добавить в корзину"
 *
 * В качестве пропсов принимает признак isDisabled, указывающий на блокировку кнопки
 *
 * и counter для определения количества добавленных позиций
 *
 * В компоненте встречается паттерн "Conditional rendering"
 *
 * Компонент подходит под паттерн "High order component"
 */

export const AddToBasket: React.FC<IAddToBasket> = ({ counter, isDisabled, increaseClick, decreaseClick }) => {
  if (counter > 0) {
    return (
      <div className={clsx('counter', 'flex-row', 'align-items-center', isDisabled && 'disabled')}>
        <Button onClick={decreaseClick}>
          <i className="fa fa-minus" />
        </Button>
        <input type="number" value={counter} onChange={() => null} readOnly />
        <Button onClick={increaseClick}>
          <i className="fa fa-plus" />
        </Button>
      </div>
    );
  }

  return (
    <Button className="primary" disabled={isDisabled} onClick={increaseClick}>
      Добавить в корзину
      <i className="margin-left-12 fa fa-shopping-cart" />
    </Button>
  );
};
