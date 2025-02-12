import type { Meta } from '@storybook/react';

import { AddToBasket } from '../../components/Button/AddToBasket';

const meta: Meta<typeof AddToBasket> = {
  title: 'Components/AddToBasket',
  component: AddToBasket,
  tags: ['autodocs'],
};

export default meta;

export const DefaultBtn = {
  name: 'Default state',
  args: {
    isDisabled: false,
    counter: 0,
  },
};

export const NotNullableCounter = {
  name: 'Not null counter',
  args: {
    isDisabled: false,
    counter: 2,
  },
};
