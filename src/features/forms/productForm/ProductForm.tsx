import { useForm } from 'react-hook-form';
import React from 'react';
import { Button } from '../../../components';
import clsx from 'clsx';

type TProcedure = 'add' | 'edit';

type TAuthFormData = {
  title: string;
  category: string;
  imgPath: string[];
  describe: string;
  price: number;
};

interface IProductForm {
  procedureType: TProcedure;
}

export const ProductForm: React.FC<IProductForm> = ({ procedureType }) => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<TAuthFormData>();

  const isAddProcedure = procedureType === 'add';

  const onSubmit = (data: TAuthFormData) => {
    console.log(`Введенные данные в форме ${isAddProcedure ? 'добавления товара' : 'редактирования товара'}: `, data);
    reset();
  };

  return (
    <div className="margin-bottom-32">
      <h3 className="margin-bottom-8">{isAddProcedure ? 'Добавление нового' : 'Редактирование имеющегося'} товара</h3>
      <form className="box form " onSubmit={handleSubmit(onSubmit)}>
        <label htmlFor="login">Название</label>
        <input
          {...register('title', {
            value: !isAddProcedure ? 'какое-то имеющееся значние поля' : undefined,
            required: true,
          })}
          className={clsx(errors.title && 'error-field', 'grid-content')}
          type="text"
          id="title"
          placeholder="Введите название"
        />

        <label htmlFor="category">Категория</label>
        <select
          {...register('category', {
            value: !isAddProcedure ? 't-shirts' : undefined,
            required: true,
          })}
          className={clsx(errors.category && 'error-field', 'grid-content')}
          id="category"
        >
          <option value="">Выберите категорию</option>
          <option value="t-shirts">Футболки, рубашки</option>
          <option value="clothes">Верхняя одежда</option>
          <option value="boots">Обувь</option>
        </select>

        <label htmlFor="imgPath">Путь к изображению</label>
        <textarea
          {...register('imgPath', {
            value: !isAddProcedure ? ['какое-то имеющееся значние поля'] : undefined,
            required: true,
          })}
          className={clsx(errors.title && 'error-field', 'grid-content')}
          id="imgPath"
          placeholder="Введите адреса через запятую"
        />

        <label htmlFor="login">Описание</label>
        <textarea
          {...register('describe', {
            value: !isAddProcedure ? 'какое-то имеющееся значние поля' : undefined,
            required: true,
          })}
          className={clsx(errors.describe && 'error-field', 'grid-content')}
          id="describe"
          placeholder="Введите описание"
        />

        <label htmlFor="login">Цена</label>
        <input
          {...register('price', {
            value: !isAddProcedure ? 10000 : undefined,
            required: true,
          })}
          className={clsx(errors.price && 'error-field', 'grid-content')}
          type="number"
          id="price"
          placeholder="Введите цену"
        />

        <Button className="small" type="submit">
          {isAddProcedure ? 'Добавить' : 'Сохранить'}
        </Button>
      </form>
    </div>
  );
};
