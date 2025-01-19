import type { Meta } from '@storybook/react';

import { Layout } from '../components/Layout/Layout';

const meta: Meta<typeof Layout> = {
  title: 'Components/Layout',
  component: Layout,
  tags: ['autodocs'],
};

export default meta;

export const Default = {
  args: {
    children: 'Например какой-нибудь текст',
  },
};
