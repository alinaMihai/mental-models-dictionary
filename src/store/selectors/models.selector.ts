import { State } from '../reducers';

export const getModelsByCategorySelector = (state: State) => {
  return state.models.models;
};
