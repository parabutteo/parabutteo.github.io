import React from 'react';
import './styles/common.scss';
import { Layout, Modal } from 'src/components';

function App() {
  return (
    <Layout>
      Content
      <Modal isOpen={false} title="Заголовок">
        Контент модального окна
      </Modal>
    </Layout>
  );
}

export default App;
