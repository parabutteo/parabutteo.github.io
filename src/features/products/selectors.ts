import { RootState } from '../../store/store';

export const selectProductTitle = (state: RootState, id: string) => {
  return state.products.find((item) => item.id === id)?.name || '';
};
export const selectProductPrice = (state: RootState, id: string) => {
  return state.products.find((item) => item.id === id)?.price || '';
};
export const selectProductImage = (state: RootState, id: string) => {
  return state.products.find((item) => item.id === id)?.photo || '';
};
