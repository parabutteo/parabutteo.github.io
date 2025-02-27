import { useForm } from 'react-hook-form';
import React from 'react';
import { Button } from '../../../components';

interface IProfileForm {
  className: string;
}

type TProfileFormData = {
  name: string;
  aboutMe: string;
};

export const ProfileForm: React.FC<IProfileForm> = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
    ...attrs
  } = useForm<TProfileFormData>();

  const onSubmit = (data: TProfileFormData) => {
    console.log('Введенные данные: ', data);
    reset();
  };

  return (
    <form className="margin-bottom-32 box form" {...attrs} onSubmit={handleSubmit(onSubmit)}>
      <label htmlFor="name">Имя</label>
      <div className="input-container">
        <input
          {...register('name', {
            required: 'Пожалуйста, введите ваше имя',
            pattern: {
              value: /^[А-Яа-я]+$/g,
              message: 'Недопустимые символы в имени',
            },
          })}
          id="name"
          placeholder="Введите имя"
        />
        {errors.name && <p className="error">{errors.name.message}</p>}
      </div>

      <label htmlFor="aboutMe">Обо мне</label>
      <textarea
        {...register('aboutMe')}
        id="aboutMe"
        className="input-container"
        rows={4}
        placeholder="Напишите пару слов о себе"
      />

      <Button type="submit">Отправить</Button>
    </form>
  );
};
