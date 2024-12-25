/**
 * Функции написанные здесь пригодятся на последующих уроках
 * С помощью этих функций мы будем добавлять элементы в список для проверки динамической загрузки
 * Поэтому в идеале чтобы функции возвращали случайные данные, но в то же время не абракадабру.
 * В целом сделайте так, как вам будет удобно.
 * */

/**
 * Нужно создать тип Category, он будет использоваться ниже.
 * Категория содержит
 * - id (строка)
 * - name (строка)
 * - photo (строка, необязательно)
 */

type Category = {
  id: string;
  name: string;
  photo?: string;
};

/** Продукт (Product) содержит
 * - id (строка)
 * - name (строка)
 * - photo (строка)
 * - desc (строка, необязательно)
 * - createdAt (строка)
 * - oldPrice (число, необязательно)
 * - price (число)
 * - category (Категория)
 */

type Product = {
  id: string;
  name: string;
  photo: string;
  desc?: string;
  createdAt: string;
  oldPrice?: number;
  price: number;
  category: Category;
};

/** Операция (Operation) может быть либо тратой (Cost), либо доходом (Profit)
 *
 * Трата (Cost) содержит
 * - id (строка)
 * - name (строка)
 * - desc (строка, необязательно)
 * - createdAt (строка)
 * - amount (число)
 * - category (Категория)
 * - type ('Cost')
 *
 * Доход (Profit) содержит
 * - id (строка)
 * - name (строка)
 * - desc (строка, необязательно)
 * - createdAt (строка)
 * - amount (число)
 * - category (Категория)
 * - type ('Profit')
 * */

type Cost = {
  id: string;
  name: string;
  desc?: string;
  createdAt: string;
  amount: number;
  category: Category;
  type: 'Cost';
};

type Profit = {
  id: string;
  name: string;
  desc?: string;
  createdAt: string;
  amount: number;
  category: Category;
  type: 'Profit';
};

type Operation = Cost | Profit;

/**
 * Создает случайный продукт (Product).
 * Принимает дату создания (строка)
 * */

const randomNumberGenerator = (min: number, max: number): number => Math.floor(Math.random() * (max - min)) + min;
const isHasField = (): boolean => Boolean(Math.round(Math.random()));
const categoryGenerator = (id: number): Category => ({
  id: id.toString(),
  name: `№${id} категория`,
  photo: isHasField() ? `assets/category/${id}.png` : undefined,
});

export const createRandomProduct = (createdAt: string): Product => {
  const id = randomNumberGenerator(0, 1000);
  const price = id * 1000;
  const oldPrice = price + 100;
  const categoryId = randomNumberGenerator(0, 1000000);

  const result: Product = {
    id: id.toString(),
    name: `Товар №${id}`,
    photo: `assets/product/${id}.png`,
    price: price,
    createdAt: createdAt,
    category: categoryGenerator(categoryId),
    desc: !isHasField() ? undefined : `Описание лучшего в мире товара с id ${id}`,
    oldPrice: isHasField() ? oldPrice : undefined,
  };

  return result;
};

/**
 * Создает случайную операцию (Operation).
 * Принимает дату создания (строка)
 * */

export const createRandomOperation = (createdAt: string): Operation => {
  const _id = randomNumberGenerator(0, 1000);
  const _type = isHasField() ? 'Profit' : 'Cost';
  const _amount = randomNumberGenerator(0, 10);
  const _catId = randomNumberGenerator(0, 1000);

  const result: Operation = {
    id: _id.toString(),
    name: `Операция #${_id}`,
    type: _type,
    createdAt: createdAt,
    amount: _amount,
    category: categoryGenerator(_catId),
    desc: !isHasField() ? `Описание операции от ${createdAt}` : undefined,
  };

  return result;
};
