import React from 'react';
import { Layout } from '../components';
import { Link } from 'react-router-dom';

export const NotFoundPage: React.FC = () => (
  <Layout>
    <h1>404</h1>
    <p className="margin-top-32">К сожалению, запрашиваемая Вами страница не найдена.</p>
    <p className="margin-top-8">
      Вы можете вернуться на <Link to="/">главную</Link>.
    </p>
  </Layout>
);
