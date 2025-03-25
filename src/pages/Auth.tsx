import React from 'react';
import { AuthForm } from 'src/features/forms';

export const Auth: React.FC = () => (
  <div className="min-height-100vh flex-row align-items-center">
    <AuthForm authType="auth" />
  </div>
);
