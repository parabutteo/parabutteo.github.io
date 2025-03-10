import { useForm } from 'react-hook-form';
import React from 'react';
import { Button } from '../../../components';
import clsx from 'clsx';

interface IProfileForm {
  /** Опциональные классы */
  className?: string;
}

type TProfileFormData = {
  name: string;
  aboutMe: string;
};

/**
 * Компонент формы в профиле
 *
 * @param className опциональные css классы
 *
 * @returns React.FC
 */

export const ProfileForm: React.FC<IProfileForm> = ({ className }) => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<TProfileFormData>();

  const onSubmit = (data: TProfileFormData) => {
    console.log('Введенные данные в форме профиля: ', data);
    reset();
  };

  return (
    <form className={clsx('box', 'form', className)} onSubmit={handleSubmit(onSubmit)}>
      <label htmlFor="name">Имя</label>
      <div className="grid-content">
        <input
          {...register('name', {
            required: 'Пожалуйста, введите ваше имя',
            pattern: {
              value: /^[А-Яа-я]+$/g,
              message: 'Недопустимые символы в имени',
            },
          })}
          className={clsx(errors.name && 'error-field')}
          type="text"
          id="name"
          placeholder="Введите имя"
        />
        {errors.name && <p className="error">{errors.name.message}</p>}
      </div>

      <label htmlFor="aboutMe">Обо мне</label>
      <textarea
        {...register('aboutMe')}
        id="aboutMe"
        className="grid-content"
        rows={4}
        placeholder="Напишите пару слов о себе"
      />

      <Button className="small" type="submit">
        Отправить
      </Button>
    </form>
  );
};
