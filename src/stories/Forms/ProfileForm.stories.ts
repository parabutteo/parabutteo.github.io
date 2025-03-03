import type { Meta } from '@storybook/react';
import { ProfileForm } from '../../features/forms/profileForm/ProfileForm';

const meta: Meta<typeof ProfileForm> = {
  title: 'Form/ProfileForm',
  component: ProfileForm,
  tags: ['autodocs'],
};

export default meta;

export const Default = {
  args: {
    className: 'margin-bottom-32',
  },
};
