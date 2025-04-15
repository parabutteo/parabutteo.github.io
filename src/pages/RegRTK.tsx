import React from 'react';
import { AuthFormRTK } from '../features/forms/authForm/AuthFormRTK';

export const RegRTK: React.FC = () => (
  <div className="min-height-100vh flex-row align-items-center">
    <AuthFormRTK authType="reg" />
  </div>
);
