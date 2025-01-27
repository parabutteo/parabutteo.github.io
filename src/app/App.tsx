import React from 'react';
import { Button, Layout, Modal } from '../components';
import '../app/styles/common.scss';
import { ContextProvider } from './ContextProvider';

export const App: React.FC = () => {
  const [modalInputValue, setModalInputValue] = React.useState<string | undefined>(undefined);
  const [isModalOpen, setIsModalOpen] = React.useState<boolean>(false);

  return (
    <ContextProvider>
      <Layout>
        <div className="box">
          <h3 className="txt-default">Создай свою модалку!</h3>
          <div className="margin-bottom-16 margin-top-16 form">
            <label>Введи текст</label>
            <input placeholder="Текст" value={modalInputValue} onChange={(ev) => setModalInputValue(ev.target.value)} />
          </div>
          <Button
            className="primary"
            onClick={() => setIsModalOpen(true)}
            disabled={modalInputValue === undefined || modalInputValue === ''}
          >
            Открыть модальное окно
          </Button>
          <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} title="Заголовок">
            {modalInputValue}
          </Modal>
        </div>
      </Layout>
    </ContextProvider>
  );
};

export default App;
