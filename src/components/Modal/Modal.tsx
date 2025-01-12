import React from 'react';
import './modal.scss';

export interface IModal {
  isOpen: boolean;
  children: React.ReactNode | React.ReactNode[] | string;
  title: string;
}

export const Modal: React.FC<IModal> = ({ isOpen, children, title }) => {
  if (!isOpen) return null;

  return (
    <div className="modal-wrapper">
      <div className="modal-content">
        <button className="modal-close-btn">
          <i className="fa fa-close" />
        </button>
        <div className="modal-body">
          <h2>{title}</h2>
          {children}
        </div>
      </div>
    </div>
  );
};
