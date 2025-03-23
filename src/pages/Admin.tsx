import React from 'react';
import { Button, Layout } from '../components';
import { Outlet } from 'react-router-dom';
import { ModalItem } from 'src/entities/ModalItem';

export const Admin: React.FC = () => {
  const [isOpenModal, setIsOpenModal] = React.useState<boolean>(false);
  const [modalType, setModalType] = React.useState<'edit' | 'add'>('add');

  return (
    <Layout>
      <h1 className="margin-bottom-32">Администраторская панель</h1>
      <div className="flex-row">
        <Button
          className="primary"
          onClick={() => {
            setIsOpenModal(true);
            setModalType('add');
          }}
        >
          Добавить новый товар
        </Button>
        <Button
          className="margin-left-12"
          onClick={() => {
            setIsOpenModal(true);
            setModalType('edit');
          }}
        >
          Редактировать товар
        </Button>
      </div>
      <ModalItem modalType={modalType} isOpen={isOpenModal} onClose={() => setIsOpenModal(false)} />
      <Outlet />
    </Layout>
  );
};
