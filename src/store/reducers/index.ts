import { combineReducers } from 'redux';
import {
  categoriesReducer,
  CategoriesInitialState,
  CategoriesState,
} from './categories.reducer';

import {
  modelsReducer,
  ModelsInitialState,
  ModelsState,
} from './models.reducer';

import {
  resourcesReducer,
  ResourcesInitialState,
  ResourcesState,
} from './resources.reducer';

export type State = {
  categories: CategoriesState;
  models: ModelsState;
  resources: ResourcesState;
};

export const initialState = {
  categories: CategoriesInitialState,
  models: ModelsInitialState,
  resources: ResourcesInitialState,
};

export const rootReducer = combineReducers({
  categories: categoriesReducer,
  models: modelsReducer,
  resources: resourcesReducer,
});
