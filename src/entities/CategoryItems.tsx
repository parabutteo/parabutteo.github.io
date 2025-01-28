import React from 'react';
import { Button, ShortCard } from '../components';
import { IShortCardItem } from '../components/Card/ShortCard';
import { createRandomProduct } from '../features/createRandomProduct';

/**
 * Краткая карточка товара
 */

export const CategoryItems: React.FC = () => {
  const productImage = (article: number) =>
    `https://github.com/parabutteo/cdn.parabutteo.github.io/blob/master/clothes_shop/category_1/${article}_1.jpg?raw=true`;

  const items: IShortCardItem[] = [
    {
      id: 1,
      title: 'Рубашка',
      details: 'Голубая базовая рубашка',
      price: 1000,
      image: productImage(3),
    },
    {
      id: 2,
      title: 'Кардиган',
      details: 'Вязаный кардиган',
      price: 2800,
      image: productImage(1),
    },
    {
      id: 3,
      title: 'Рубашка',
      details: 'Клетчатая рубашка',
      price: 1700,
      image: productImage(2),
    },
    {
      id: 4,
      title: 'Жилетка',
      details: 'Уютная жилетка',
      price: 2100,
      image: productImage(4),
    },
  ];

  const [itemsList, setItemsList] = React.useState<IShortCardItem[]>(items);

  const showMoreBtnHandler = (): void => {
    const newCards = Array.from({ length: 4 }, (_, index) => createRandomProduct(itemsList.length + 1 + index));
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
