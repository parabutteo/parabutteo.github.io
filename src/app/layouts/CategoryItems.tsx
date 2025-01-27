import React from 'react';
import { Button, ShortCard } from '../../components';
import { IShortCardItem } from '../../components/Card/ShortCard';
import { createRandomProduct } from './createRandomProduct';

/**
 * Краткая карточка товара
 */

export const CategoryItems: React.FC = () => {
  const items: IShortCardItem[] = [
    {
      id: 1,
      title: 'Футболка',
      details: 'Белая базовая футболка',
      price: 1000,
      image: 'https://cdn.parabutteo.github.io/blob/master/clothes_shop/item_1/1_1.jpg',
    },
    {
      id: 2,
      title: 'Кардиган',
      details: 'Вязаный кардиган',
      price: 2800,
      image: 'https://static.insales-cdn.com/images/products/1/4008/465006504/17024061_43_R.jpg',
    },
    {
      id: 3,
      title: 'Бадлон',
      details: 'Уютный бадлон',
      price: 2100,
      image: 'https://static.insales-cdn.com/images/products/1/4008/465006504/17024061_43_R.jpg',
    },
    {
      id: 4,
      title: 'Майка',
      details: 'Легкая майка',
      price: 800,
      image: 'https://static.insales-cdn.com/images/products/1/4008/465006504/17024061_43_R.jpg',
    },
  ];

  const [itemsList, setItemsList] = React.useState<IShortCardItem[]>(items);

  const showMoreBtnHandler = (): void => {
    const newCards = Array.from({ length: 4 }, () => createRandomProduct());
    setItemsList([...itemsList, ...newCards]);
  };

  return (
    <>
      <div className="grid">
        {itemsList.map((item) => (
          <ShortCard item={item} key={item.id} />
        ))}
      </div>
      <Button className="margin-auto primary margin-bottom-32" onClick={() => showMoreBtnHandler()}>
        Показать ещё
      </Button>
    </>
  );
};
