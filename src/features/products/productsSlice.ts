import { createSlice } from '@reduxjs/toolkit';

interface Product {
  id: string;
  title: string;
  price: number;
  image: string;
  category: string;
  details: string;
}

const productImage = (article: number) =>
  `https://github.com/parabutteo/cdn.parabutteo.github.io/blob/master/clothes_shop/category_1/${article}_1.jpg?raw=true`;

const initialState: Product[] = [
  {
    id: '1',
    title: 'Рубашка',
    details: 'Голубая базовая рубашка',
    price: 1000,
    image: productImage(3),
    category: 'Футболки, рубашки',
  },
  {
    id: '2',
    title: 'Кардиган',
    details: 'Вязаный кардиган',
    price: 2800,
    image: productImage(1),
    category: 'Футболки, рубашки',
  },
  {
    id: '3',
    title: 'Рубашка',
    details: 'Клетчатая рубашка',
    price: 1700,
    image: productImage(2),
    category: 'Футболки, рубашки',
  },
  {
    id: '4',
    title: 'Жилетка',
    details: 'Уютная жилетка',
    price: 2100,
    image: productImage(4),
    category: 'Футболки, рубашки',
  },
];

const productsSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    addProduct(state, action: { payload: Product }) {
      state.push(action.payload);
    },
    editProduct(state, action: { payload: Product }) {
      const index = state.findIndex((item) => item.id === action.payload.id);
      if (index !== -1) {
        state[index] = action.payload;
      }
    },
    removeProduct(state, action: { payload: string }) {
      return state.filter((item) => item.id !== action.payload);
    },
    addRandomProducts(state, action: { payload: Product[] }) {
      state.push(...action.payload);
    },
  },
});

export const { addProduct, editProduct, removeProduct, addRandomProducts } = productsSlice.actions;
export default productsSlice.reducer;
