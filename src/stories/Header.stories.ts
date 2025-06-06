import type { Meta } from '@storybook/react';
import { Header } from '../components/Header/Header';
import StoryContextProvider from '../../.storybook/decorators/StoryContextProvider';

const meta: Meta<typeof Header> = {
  title: 'Components/Header',
  component: Header,
  decorators: [StoryContextProvider],
  tags: ['autodocs'],
};

export default meta;

export const Default = {};
