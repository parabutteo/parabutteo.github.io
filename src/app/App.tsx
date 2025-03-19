import React from 'react';
import { Button, Collapse, Layout, Modal, Resizer } from '../components';
import '../app/styles/common.scss';
import { ContextProvider } from './ContextProvider';
import { CategoryItems } from '../entities';
import { AuthForm, ProductForm, ProfileForm } from '../features/forms';
import AccountService from '../features/account-service/AccountService';
import { ProductType, UserType } from '../features/account-service/types';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

/**
 * Входной файл приложения
 *
 * В компоненте input присутствует паттерн "Controlled input"
 */

export const App: React.FC = () => {
  const [modalInputValue, setModalInputValue] = React.useState<string | undefined>(undefined);
  const [isModalOpen, setIsModalOpen] = React.useState<boolean>(false);

  // Пример использования класса AccountService
  const service = new AccountService();
  const userType = UserType.Premium;
  const initialPrice = 5000000;

  const userDiscount = service.getDiscount(userType);
  const userProductDiscount = service.getUserProductDiscount(userType, ProductType.Car);
  const commonDiscount = service.getCommonDiscount(userType, ProductType.Car);
  const finalPrice = service.calculateFinalPrice(initialPrice, userType, ProductType.Car);

  const discountListPromise = service.getUserProductsDiscountList();
  discountListPromise.then((result) => {
    console.log(result);
  });

  return (
    <BrowserRouter basename="/parabutteo.github.io/">
      <Routes>
        <Route path="/" element={<div>Initial page</div>} />
        <Route path="/one" element={<div>One page</div>} />
        <Route path="/two" element={<div>Two page</div>} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
