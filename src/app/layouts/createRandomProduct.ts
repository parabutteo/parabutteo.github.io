import { IShortCardItem } from '../../components/Card/ShortCard';

const randomNumberGenerator = (min: number, max: number): number => Math.floor(Math.random() * (max - min)) + min;

export const createRandomProduct = (): IShortCardItem => {
  const id = randomNumberGenerator(0, 1000);
  const price = id * 1000;

  const result: IShortCardItem = {
    id: id,
    title: `Товар №${id}`,
    image: `assets/product/${id}.png`,
    price: price,
    details: `Описание лучшего в мире товара с id ${id}`,
  };

  return result;
};
