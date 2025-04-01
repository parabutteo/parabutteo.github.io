import React from 'react';
import { Button, Layout } from '../components';
import { ProfileForm } from '../features/forms';
import { useAppDispatch, useAppSelector } from '../store/hooks';
import { updateProfile } from '../features/auth/authSlice';

export type ProfileT = {
  id: string;
  name: string;
  email: string;
  aboutMe: string;
};

export const Profile: React.FC = () => {
  const profileInfo = useAppSelector((state) => state.auth.profile);

  const [isEditMode, setIsEditMode] = React.useState<boolean>(false);
  const [form, setForm] = React.useState<ProfileT>({
    id: profileInfo.id,
    name: profileInfo.name,
    email: profileInfo.email,
    aboutMe: profileInfo.aboutMe,
  });

  const dispatch = useAppDispatch();

  const sendHandler = (): void => {
    setIsEditMode(false);

    const newProfile = {
      ...form,
      aboutMe: form.aboutMe,
      name: form.name,
    };
    dispatch(updateProfile(newProfile));
  };

  return (
    <Layout title="Профиль">
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
