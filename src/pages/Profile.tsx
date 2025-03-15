import React from 'react';
import { Button, Layout } from '../components';
import { ProfileForm } from '../features/forms';

export type ProfileT = {
  name: string;
  aboutMe: string;
};

export const Profile: React.FC = () => {
  const [isEditMode, setIsEditMode] = React.useState<boolean>(false);
  const [form, setForm] = React.useState<ProfileT>({
    name: 'Фродо Бэггинс',
    aboutMe:
      'Я Фродо Бэггинс, хоббит из Шира. Я стал одной из легенд в истории Средиземья, взяв на себя миссию уничтожить Единое Кольцо Саурона.',
  });

  const sendHandler = (): void => {
    setIsEditMode(false);
  };

  return (
    <Layout>
      <h1 className="margin-bottom-32">Профиль</h1>
      {!isEditMode ? (
        <>
          <dl className="list">
            <dt>Имя</dt>
            <dd>{form.name}</dd>
            <dt>Обо мне</dt>
            <dd>{form.aboutMe}</dd>
          </dl>
          <div className="footer txt-right">
            <Button onClick={() => setIsEditMode((prev) => !prev)}>Редактировать</Button>
          </div>
        </>
      ) : (
        <ProfileForm
          className="margin-top-32 margin-bottom-32"
          form={form}
          setForm={setForm}
          sendHandler={sendHandler}
        />
      )}
    </Layout>
  );
};
