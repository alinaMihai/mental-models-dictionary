import {
  ResourcesActionTypes,
  FETCH_EXTRA_RESOURCES_SUCCESS,
  FETCH_EXTRA_RESOURCES_START,
  FETCH_EXTRA_RESOURCES_FAILURE,
} from '../actions/resources.action';

export interface Resource {
  Title: string;
  URL: string;
  Resource: string;
}

export type ResourcesState = {
  resources: Resource[];
  isLoading: boolean;
  hasError: boolean;
};

export const ResourcesInitialState: ResourcesState = {
  resources: [],
  isLoading: false,
  hasError: false,
};

export const resourcesReducer = (
  state: ResourcesState = ResourcesInitialState,
  action: ResourcesActionTypes,
): ResourcesState => {
  switch (action.type) {
    case FETCH_EXTRA_RESOURCES_SUCCESS:
      return {
        ...state,
        isLoading: false,
        hasError: false,
        resources: action.payload.resources,
      };
    case FETCH_EXTRA_RESOURCES_START:
      return { ...state, isLoading: true };
    case FETCH_EXTRA_RESOURCES_FAILURE:
      return { ...state, isLoading: false, hasError: true };
    default:
      return state;
  }
};
