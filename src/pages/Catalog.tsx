import React from 'react';
import { Layout } from '../components';
import { CategoryItems } from '../entities';

export const Catalog: React.FC = () => (
  <Layout>
    <h1 className="margin-bottom-32">Каталог</h1>
    <CategoryItems />
  </Layout>
);
