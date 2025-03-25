import React from 'react';
import { Link } from 'react-router-dom';

/**
 * Логотип сайта
 */

export const Logo: React.FC = () => {
  return (
    <Link to="/" className="logo">
      Vintagevault
    </Link>
  );
};
