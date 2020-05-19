import {
  ModelsActionsTypes,
  FETCH_MODELS_SUCCESS,
  FETCH_MODELS_START,
  FETCH_MODELS_FAILURE,
  FETCH_MODELS_BY_CATEGORY_SUCCESS,
  FETCH_MODELS_BY_CATEGORY_FAILURE,
  FETCH_MODELS_BY_CATEGORY_START,
} from '../actions/models.action';
import { MentalModel } from 'screens/mental-models-by-category/components/models-list/ModelsList';
export type ModelsState = {
  models: MentalModel[];
  isLoading: boolean;
  hasError: boolean;
};

export const ModelsInitialState: ModelsState = {
  models: [],
  isLoading: false,
  hasError: false,
};

export const modelsReducer = (
  state: ModelsState = ModelsInitialState,
  action: ModelsActionsTypes,
): ModelsState => {
  switch (action.type) {
    case FETCH_MODELS_SUCCESS:
    case FETCH_MODELS_BY_CATEGORY_SUCCESS:
      return {
        ...state,
        isLoading: false,
        hasError: false,
        models: action.payload.models,
      };
    case FETCH_MODELS_START:
    case FETCH_MODELS_BY_CATEGORY_START:
      return { ...state, isLoading: true };
    case FETCH_MODELS_FAILURE:
    case FETCH_MODELS_BY_CATEGORY_FAILURE:
      return { ...state, isLoading: false, hasError: true };
    default:
      return state;
  }
};
