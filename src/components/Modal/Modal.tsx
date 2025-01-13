import React from 'react';
import './modal.scss';

export interface IModal {
  onClose: () => void;
  isOpen: boolean;
  children: React.ReactNode | React.ReactNode[] | string;
  title: string;
}

export const Modal: React.FC<IModal> = ({ onClose, isOpen, children, title }) => {
  if (!isOpen) return null;

  const handleOverlayClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if ((e.target as HTMLElement).classList.contains('modal-wrapper')) {
      onClose();
    }
  };

  return (
    <div className="modal-wrapper" onClick={handleOverlayClick}>
      <div className="modal-content">
        <button className="icon-btn modal-close-btn" onClick={onClose}>
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
