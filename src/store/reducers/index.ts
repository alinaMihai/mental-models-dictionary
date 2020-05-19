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

export type State = {
  categories: CategoriesState;
  models: ModelsState;
};

export const initialState = {
  categories: CategoriesInitialState,
  models: ModelsInitialState,
};

export const rootReducer = combineReducers({
  categories: categoriesReducer,
  models: modelsReducer,
});
