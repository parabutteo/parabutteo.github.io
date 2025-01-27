import type { Meta } from '@storybook/react';
import { Layout } from '../components/Layout/Layout';
import StoryContextProvider from '../../.storybook/decorators/StoryContextProvider';

const meta: Meta<typeof Layout> = {
  title: 'Components/Layout',
  component: Layout,
  decorators: [StoryContextProvider],
  tags: ['autodocs'],
};

export default meta;

export const Default = {
  args: {
    children: 'Например какой-нибудь текст',
  },
};
