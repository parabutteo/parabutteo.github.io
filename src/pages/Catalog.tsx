import React from 'react';
import { Layout } from '../components';
import { CategoryItems } from '../entities';

export const Catalog: React.FC = () => (
  <Layout title="Каталог">
    <CategoryItems />
  </Layout>
);
