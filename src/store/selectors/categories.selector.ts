import { State } from '../reducers';

export const getCategoriesSelector = (state: State) =>
  state.categories.categories;
