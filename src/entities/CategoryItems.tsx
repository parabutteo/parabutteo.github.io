import React from 'react';
import { Button, Loader, ShortCard } from '../components';
import { GET_PRODUCTS } from '../graphql/queries/products';
import { useQuery } from '@apollo/client';
import { IShortCardItem } from '../components/Card/ShortCard';
import { COMMAND_ID } from 'src/shared/constants';

export const CategoryItems: React.FC = () => {
  const [visibleCount, setVisibleCount] = React.useState(4);

  // Параметры запроса
  const input = {
    // например: categoryId: 'some-id'
  };

  const { data, loading, error } = useQuery(GET_PRODUCTS, {
    variables: { input },
  });

  // Получаем массив товаров из данных запроса
  const products = data?.products.getMany.data;

  // Приводим данные к нужному типу
  const normalizedProducts: IShortCardItem[] =
    products && Array.isArray(products)
      ? products
          .filter((p: IShortCardItem) => p.commandId === COMMAND_ID)
          .map((p: IShortCardItem) => ({
            id: p.id,
            name: p.name,
            desc: p.desc,
            price: p.price,
            photo: p.photo,
            category: p.category,
          }))
      : [];

  // Ограничиваем отображение товаров по visibleCount
  const visibleProducts = normalizedProducts.slice(0, visibleCount);

  // Обработчик кнопки "Показать ещё"
  const showMoreBtnHandler = (): void => {
    setVisibleCount((prev) => prev + 4);
  };

  return (
    <>
      {loading && <Loader />}
      <div className="grid">
        {error && <p>Ошибка загрузки товаров: {error.message}</p>}
        {!loading &&
          !error &&
          visibleProducts.length > 0 &&
          visibleProducts.map((item) => <ShortCard item={item} key={item.id} />)}
      </div>
      {!loading && !error && visibleCount < normalizedProducts.length && (
        <Button className="margin-auto primary margin-bottom-32" onClick={showMoreBtnHandler}>
          Показать ещё
        </Button>
      )}
    </>
  );
};
