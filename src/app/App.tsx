import React from 'react';
import { Button, Collapse, Layout, Modal, Resizer } from '../components';
import '../app/styles/common.scss';
import { ContextProvider } from './ContextProvider';
import { CategoryItems } from '../entities';
import { ProfileForm } from '../features/forms';

/**
 * Входной файл приложения
 *
 * В компоненте input присутствует паттерн "Controlled input"
 */

export const App: React.FC = () => {
  const [modalInputValue, setModalInputValue] = React.useState<string | undefined>(undefined);
  const [isModalOpen, setIsModalOpen] = React.useState<boolean>(false);

  return (
    <ContextProvider>
      <Layout>
        <ProfileForm className="margin-bottom-32" />
        <Resizer className="margin-bottom-32">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui modi eligendi dolorum voluptatibus soluta
          pariatur quam fugiat ab quaerat rem provident quas at possimus officia repellat, consequuntur culpa ipsum iure
          autem, voluptatem perferendis aliquam delectus repellendus perspiciatis. Nam sint at sunt provident, amet odio
          vitae libero illo, dolore consequatur deserunt praesentium sit dicta quod neque quis dolorem iste alias, autem
          maiores atque doloribus! Ea ipsum iusto possimus maiores quae tenetur ratione sed, est, veritatis labore cum,
          tempora nemo consequuntur inventore.
        </Resizer>
        <Collapse title="Заголовок панели" className="margin-bottom-32">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui modi eligendi dolorum voluptatibus soluta
          pariatur quam fugiat ab quaerat rem provident quas at possimus officia repellat, consequuntur culpa ipsum iure
          autem, voluptatem perferendis aliquam delectus repellendus perspiciatis. Nam sint at sunt provident, amet odio
          vitae libero illo, dolore consequatur deserunt praesentium sit dicta quod neque quis dolorem iste alias, autem
          maiores atque doloribus! Ea ipsum iusto possimus maiores quae tenetur ratione sed, est, veritatis labore cum,
          tempora nemo consequuntur inventore.
        </Collapse>
        <CategoryItems />
        <div className="box">
          <h3 className="txt-default">Создай свою модалку!</h3>
          <div className="margin-bottom-16 margin-top-16 form">
            <label>Введи текст</label>
            <input
              className="input-container"
              placeholder="Текст"
              value={modalInputValue}
              onChange={(ev) => setModalInputValue(ev.target.value)}
            />
          </div>
          <Button
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
