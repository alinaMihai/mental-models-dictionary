import { State } from '../reducers';

export const getModelsByCategorySelector = (state: State) => {
  return state.models.models;
};
export const isLoadingModelsSelector = (state: State) => {
  return state.models.isLoading;
};
