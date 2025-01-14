import type { Meta } from '@storybook/react';

import { Header } from '../components/Header/Header';

const meta: Meta<typeof Header> = {
  title: 'Components/Header',
  component: Header,
  tags: ['autodocs'],
  argTypes: {},
};

export default meta;

export const Default = {
  args: {},
};
