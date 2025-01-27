import type { Meta } from '@storybook/react';

import { ShortCard } from '../../components/Card/ShortCard';

const meta: Meta<typeof ShortCard> = {
  title: 'Card/ShortCard',
  component: ShortCard,
  tags: ['autodocs'],
};

export default meta;

export const Default = {
  args: {
    item: {
      title: 'Твидовый кардиган',
      details:
        'Тут описание вашего товара, начните с самого интересного о вашем товаре, зацепите вашего покупателя. Пишите так, чтобы было полезно вашему будущему покупателю. Можно добавить материал который используется в вашем товаре (или состав вашего продукта). Добавьте инструкцию по использованию.',
      image:
        'https://static.insales-cdn.com/r/fiDjdi_6FnQ/rs:fit:1000:0:1/plain/images/products/1/4006/465006502/17024061_43.jpg@webp',
      price: 1300,
    },
  },
};
