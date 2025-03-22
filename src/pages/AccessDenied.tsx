import React from 'react';
import { Layout } from '../components';
import { Link } from 'react-router-dom';

export const AccessDenied: React.FC = () => (
  <Layout>
    <h1>Доступ запрещен</h1>
    <p className="margin-top-32">Доступ к запрашиваемой Вами странице запрещен</p>
    <p className="margin-top-8">Вы можете:</p>
    <ul>
      <li>
        вернуться на <Link to="/">главную</Link>
      </li>
      <li>&laquo;авторизоваться&raquo; добавив в&nbsp;урл дописку ?user=auth</li>
    </ul>
  </Layout>
);
