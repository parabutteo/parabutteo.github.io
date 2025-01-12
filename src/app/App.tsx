import React from 'react';
import './styles/common.scss';
import { Button, Layout, Modal } from 'src/components';

function App() {
  const [isModalOpen, setIsModalOpen] = React.useState<boolean>(false);

  return (
    <Layout>
      <Button onClick={() => setIsModalOpen(true)}>Открыть модальное окно</Button>
      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} title="Заголовок">
        Контент модального окна
      </Modal>
    </Layout>
  );
}

export default App;
