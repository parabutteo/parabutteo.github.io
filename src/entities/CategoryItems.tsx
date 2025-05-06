import React from 'react';
import { Button, Loader, ShortCard } from '../components';
import { createRandomProduct } from '../features/createRandomProduct';
import { useAppDispatch, useAppSelector } from '../store/hooks';
import { addRandomProducts } from '../features/products/productsSlice';
import { GET_PRODUCTS } from 'src/graphql/queries/products';
import { useQuery } from '@apollo/client';
import { IShortCardItem } from 'src/components/Card/ShortCard';

export const CategoryItems: React.FC = () => {
  const dispatch = useAppDispatch();
  const productsStore = useAppSelector((state) => state.products);

  const showMoreBtnHandler = (): void => {
    const newProducts = Array.from({ length: 4 }, (_, index) => createRandomProduct(productsStore.length + 1 + index));
    dispatch(addRandomProducts(newProducts));
  };

  const input = {
    // параметры запроса
  };

  const { data, loading, error } = useQuery(GET_PRODUCTS, {
    variables: { input },
  });

  console.log(data);

  const products = data?.products.getMany.data;

  // Приведение данных к нужному типу
  const normalizedProducts: IShortCardItem[] =
    products && Array.isArray(products)
      ? products.map((p: any) => ({
          id: p.id,
          name: p.name,
          details: p.desc || '',
          price: p.price,
          photo: p.photo,
          category: p.category,
        }))
      : [];

  return (
    <>
      {loading && <Loader />}
      <div className="grid">
        {error && <p>Ошибка загрузки товаров: {error.message}</p>}
        {!loading && !error && normalizedProducts.length > 0
          ? normalizedProducts.map((item) => <ShortCard item={item} key={item.id} />)
          : !loading && !error && <p>Нет данных или данные не в формате массива</p>}
      </div>
      {!loading && !error && (
        <Button className="margin-auto primary margin-bottom-32" onClick={showMoreBtnHandler}>
          Показать ещё
        </Button>
      )}
    </>
  );
};
