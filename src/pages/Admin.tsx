import React from 'react';
import { Button, Layout, Modal } from '../components';
import { ProductForm } from 'src/features/forms';

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
      <Modal
        title={`${modalType === 'add' ? 'Добавление нового' : 'Редактирование имеющегося'} товара`}
        isOpen={isOpenModal}
        onClose={() => setIsOpenModal(false)}
      >
        <ProductForm procedureType={modalType === 'add' ? 'add' : 'edit'} />
      </Modal>
    </Layout>
  );
};
