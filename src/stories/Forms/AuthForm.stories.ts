import type { Meta } from '@storybook/react';
import { AuthForm } from '../../features/forms/authForm/AuthForm';

const meta: Meta<typeof AuthForm> = {
  title: 'Form/AuthForm',
  component: AuthForm,
  tags: ['autodocs'],
};

export default meta;

export const Registration = {
  args: {
    authType: 'reg',
  },
};

export const Authorization = {
  args: {
    authType: 'auth',
  },
};