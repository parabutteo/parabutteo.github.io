import type { Meta } from '@storybook/react';

import { FullCard } from '../../components/Card/FullCard';

const meta: Meta<typeof FullCard> = {
  title: 'Card/FullCard',
  component: FullCard,
  tags: ['autodocs'],
};

export default meta;

export const Default = {
  args: {
    title: 'Твидовый кардиган',
    category: 'Футболки, рубашки',
    details:
      'Тут описание вашего товара, начните с самого интересного о вашем товаре, зацепите вашего покупателя. Пишите так, чтобы было полезно вашему будущему покупателю. Можно добавить материал который используется в вашем товаре (или состав вашего продукта). Добавьте инструкцию по использованию.',
    image: [
      'https://static.insales-cdn.com/r/fiDjdi_6FnQ/rs:fit:1000:0:1/plain/images/products/1/4006/465006502/17024061_43.jpg@webp',
      'https://static.insales-cdn.com/images/products/1/4008/465006504/17024061_43_R.jpg',
      'https://static.insales-cdn.com/images/products/1/4011/465006507/17024061_43-99999999_01.jpg',
    ],
    price: 11300,
    className: 'secondary',
  },
};
