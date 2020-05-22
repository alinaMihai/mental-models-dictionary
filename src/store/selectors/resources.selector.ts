import { State } from '../reducers';

export const getResourcesSelector = (state: State) => state.resources.resources;
export const isLoadingResourcesSelector = (state: State) =>
  state.resources.isLoading;
