import type { Meta } from '@storybook/react';

import { BasketItem } from '../../components/Card/BasketItem';

const meta: Meta<typeof BasketItem> = {
  title: 'Card/BasketItem',
  component: BasketItem,
  tags: ['autodocs'],
};

export default meta;

export const Default = {
  args: {
    title: 'Твидовый кардиган',
    image:
      'https://static.insales-cdn.com/r/fiDjdi_6FnQ/rs:fit:1000:0:1/plain/images/products/1/4006/465006502/17024061_43.jpg@webp',
    price: 1300,
  },
};
