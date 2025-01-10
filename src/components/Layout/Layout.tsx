import React from 'react';

interface ILayout {
  children: React.ReactNode | React.ReactNode[] | string;
}

export const Layout: React.FC<ILayout> = ({ children }: ILayout) => <main>{children}</main>;
