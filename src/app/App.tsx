import React from 'react';
import { Button, Layout, Modal } from 'src/components';
import '../app/styles/common.scss';

function App() {
  const [isModalOpen, setIsModalOpen] = React.useState<boolean>(false);

  return (
    <Layout>
      <Button className="primary" onClick={() => setIsModalOpen(true)}>
        Открыть модальное окно
      </Button>
      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} title="Заголовок">
        Контент модального окна
      </Modal>
    </Layout>
  );
}

export default App;
