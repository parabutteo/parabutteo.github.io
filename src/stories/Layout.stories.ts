import type { Meta } from '@storybook/react';

import { Layout } from '../components/Layout/Layout';

const meta: Meta<typeof Layout> = {
  title: 'Components/Layout',
  component: Layout,
  tags: ['autodocs'],
  argTypes: {},
};

export default meta;

export const Default = {
  args: {},
};
