import { IShortCardItem } from '../components/Card/ShortCard';
import createRandomProductImage from './createRandomProductImage';

export const randomNumberGenerator = (min: number, max: number): number =>
  Math.floor(Math.random() * (max - min + 1)) + min;

export const createRandomProduct = (id: number): IShortCardItem => {
  const price = randomNumberGenerator(1, 4) * 1000 + randomNumberGenerator(1, 9) * 100;

  const result: IShortCardItem = {
    id: id.toString(),
    name: `Товар №${id}`,
    photo: createRandomProductImage(randomNumberGenerator(1, 4)),
    price: price,
    desc: `Описание лучшего в мире товара с id №${id}`,
    category: { name: 'random' },
  };

  return result;
};
