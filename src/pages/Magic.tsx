import React from 'react';
import { Button, Collapse, Layout, Modal, Resizer } from '../components';
import AccountService from '../features/account-service/AccountService';
import { ProductType, UserType } from '../features/account-service/types';

export const Magic: React.FC = () => {
  // Пример использования класса AccountService
  const service = new AccountService();
  const userType = UserType.Premium;
  const initialPrice = 5000000;

  const userDiscount = service.getDiscount(userType);
  const userProductDiscount = service.getUserProductDiscount(userType, ProductType.Car);
  const commonDiscount = service.getCommonDiscount(userType, ProductType.Car);
  const finalPrice = service.calculateFinalPrice(initialPrice, userType, ProductType.Car);

  const discountListPromise = service.getUserProductsDiscountList();
  discountListPromise.then((result) => {
    console.log(result);
  });

  // Для модалки с прокидыванием текста
  const [modalInputValue, setModalInputValue] = React.useState<string | undefined>(undefined);
  const [isModalOpen, setIsModalOpen] = React.useState<boolean>(false);

  return (
    <Layout title="Все подряд, что накопилось">
      {/* Пример использования класса AccountService */}
      <div className="box margin-bottom-32">
        <p>Скидка для премиум-пользователя: {userDiscount * 100}%</p>
        <p>Скидка для премиум-пользователя на машину: {userProductDiscount * 100}%</p>
        <hr />
        <p>Итоговая скидка для премиум-пользователя на покупку машины: {commonDiscount}%</p>
        <hr />
        <p>Начальная цена за авто: {initialPrice}₽</p>
        <p>Итоговая цена для премиум-пользователя на машину: {finalPrice}₽</p>
      </div>
      {/* Конец Пример использования класса AccountService */}

      <Resizer className="margin-bottom-32">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui modi eligendi dolorum voluptatibus soluta pariatur
        quam fugiat ab quaerat rem provident quas at possimus officia repellat, consequuntur culpa ipsum iure autem,
        voluptatem perferendis aliquam delectus repellendus perspiciatis. Nam sint at sunt provident, amet odio vitae
        libero illo, dolore consequatur deserunt praesentium sit dicta quod neque quis dolorem iste alias, autem maiores
        atque doloribus! Ea ipsum iusto possimus maiores quae tenetur ratione sed, est, veritatis labore cum, tempora
        nemo consequuntur inventore.
      </Resizer>
      <Collapse title="Заголовок панели" className="margin-bottom-32">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui modi eligendi dolorum voluptatibus soluta pariatur
        quam fugiat ab quaerat rem provident quas at possimus officia repellat, consequuntur culpa ipsum iure autem,
        voluptatem perferendis aliquam delectus repellendus perspiciatis. Nam sint at sunt provident, amet odio vitae
        libero illo, dolore consequatur deserunt praesentium sit dicta quod neque quis dolorem iste alias, autem maiores
        atque doloribus! Ea ipsum iusto possimus maiores quae tenetur ratione sed, est, veritatis labore cum, tempora
        nemo consequuntur inventore.
      </Collapse>

      <div className="box">
        <h3 className="txt-default">Создай свою модалку!</h3>
        <div className="margin-bottom-16 margin-top-16 form">
          <label>Введи текст</label>
          <input
            className="grid-content"
            placeholder="Текст"
            value={modalInputValue}
            onChange={(ev) => setModalInputValue(ev.target.value)}
          />
        </div>
        <Button onClick={() => setIsModalOpen(true)} disabled={modalInputValue === undefined || modalInputValue === ''}>
          Открыть модальное окно
        </Button>
        <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} title="Заголовок">
          {modalInputValue}
        </Modal>
      </div>
    </Layout>
  );
};
