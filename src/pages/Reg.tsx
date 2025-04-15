import React from 'react';
import { AuthForm } from '../features/forms';

export const Reg: React.FC = () => (
  <div className="min-height-100vh flex-row align-items-center">
    <AuthForm authType="reg" />
  </div>
);
