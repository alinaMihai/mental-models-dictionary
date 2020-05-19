import { State } from '../reducers';

export const getCategoriesSelector = (state: State) =>
  state.categories.categories;

export const getCategoryByIdSelector = (id) => {
  return (state: State) =>
    state.categories.categories.find((item) => item.id === id);
};
