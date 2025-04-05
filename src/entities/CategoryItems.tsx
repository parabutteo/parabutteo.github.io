import React from 'react';
import { Button, ShortCard } from '../components';
import { createRandomProduct } from '../features/createRandomProduct';
import { useAppDispatch, useAppSelector } from '../store/hooks';
import { addRandomProducts } from '../features/products/productsSlice';

/**
 * Краткая карточка товара
 */

export const CategoryItems: React.FC = () => {
  const dispatch = useAppDispatch();
  const products = useAppSelector((state) => state.products);

  const showMoreBtnHandler = (): void => {
    const newProducts = Array.from({ length: 4 }, (_, index) => createRandomProduct(products.length + 1 + index));
    dispatch(addRandomProducts(newProducts));
  };

  return (
    <>
      <div className="grid">
        {products.map((item) => (
          <ShortCard item={item} key={item.id} />
        ))}
      </div>
      <Button className="margin-auto primary margin-bottom-32" onClick={() => showMoreBtnHandler()}>
        Показать ещё
      </Button>
    </>
  );
};
