import React from 'react';
import './styles/common.scss';
import { Button, FullCard, Layout, Modal } from 'src/components';

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
      <FullCard
        price={100}
        details="dsadasdas  das dasasdas  das das d"
        title="dasds"
        category="dsad"
        image="https://static.insales-cdn.com/r/XVcGqvd6uTo/rs:fit:440:0:1/q:100/plain/images/products/1/640/465011328/17024061_43-99999999_01.jpg@webp"
      />
    </Layout>
  );
}

export default App;
