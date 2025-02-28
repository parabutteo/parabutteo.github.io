import type { Meta } from '@storybook/react';
import { ProductForm } from '../../features/forms/productForm/ProductForm';

const meta: Meta<typeof ProductForm> = {
  title: 'Form/ProductForm',
  component: ProductForm,
  tags: ['autodocs'],
};

export default meta;

export const Add = {
  args: {
    procedureType: 'add',
  },
};

export const Edit = {
  args: {
    procedureType: 'edit',
  },
};
