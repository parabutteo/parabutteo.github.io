import React from 'react';
import { ProductForm } from 'src/features/forms';
import { Modal } from 'src/components';
import { useNavigate } from 'react-router-dom';

interface ModalItemProps {
  modalType: 'edit' | 'add';
  isOpen?: boolean;
  setIsOpen?: () => void,
}

export const ModalItem: React.FC<ModalItemProps> = ({ modalType, isOpen = true, setIsOpen }) => {
  const navigate = useNavigate();

  return (
    <Modal
      title={`${modalType === 'add' ? 'Добавление нового' : 'Редактирование имеющегося'} товара`}
      isOpen={isOpen}
      onClose={setIsOpen === undefined ? () => navigate('/admin') : setIsOpen}
    >
      <ProductForm procedureType={modalType === 'add' ? 'add' : 'edit'} />
    </Modal>
  );
};
