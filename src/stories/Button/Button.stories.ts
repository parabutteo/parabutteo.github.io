import type { Meta } from '@storybook/react';

import { Button } from '../../components/Button/Button';

const meta: Meta<typeof Button> = {
  title: 'Components/Button',
  component: Button,
  tags: ['autodocs'],
  argTypes: {
    className: {
      options: ['primary', 'secondary'],
      control: { type: 'radio' },
    },
    disabled: { control: 'boolean' },
  },
};

export default meta;

export const Primary = {
  args: {
    disabled: false,
    className: 'primary',
    children: 'Текст кнопки',
  },
};

export const Secondary = {
  args: {
    disabled: false,
    className: 'secondary',
    children: 'Текст кнопки',
  },
};
