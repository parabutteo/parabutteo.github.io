import type { Meta } from '@storybook/react';

import { Modal } from '../components/Modal/Modal';

const meta: Meta<typeof Modal> = {
  title: 'Components/Modal',
  component: Modal,
  tags: ['autodocs'],
};

export default meta;

export const Default = {
  args: {
    isOpen: true,
    title: 'Заголовок',
    children: 'Какой-нибудь текст стрингой или jsx-разметка',
  },
};
