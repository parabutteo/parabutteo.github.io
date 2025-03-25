import React from 'react';
import '../app/styles/common.scss';
import { ContextProvider } from './ContextProvider';
import { AppRoutes } from './navigation/AppRoutes';

/**
 * Входной файл приложения
 *
 * В компоненте input присутствует паттерн "Controlled input"
 */

export const App: React.FC = () => (
  <ContextProvider>
    <AppRoutes />
  </ContextProvider>
);

export default App;
