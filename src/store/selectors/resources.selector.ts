import { State } from '../reducers';

export const getResourcesSelector = (state: State) => state.resources.resources;
