import React from 'react';
import { Layout } from '../components';

export interface IBasketItem {
  /** Заголовок */
  title: string;
  /** Цена */
  price: number;
  /** Изображение */
  image: string;
}

export const NotFoundPage: React.FC = () => {
  const [isEditMode, setIsEditMode] = React.useState<boolean>(false);
  const [form, setForm] = React.useState('миша');

  return (
    <Layout>
      <h1>404</h1>
      <p className="margin-top-32">К сожалению, запрашиваемая Вами страница не найдена. </p>
      <p className="margin-top-8">
        Вы можете вернуться на <a href="/">главную</a>.
      </p>
    </Layout>
  );
};
