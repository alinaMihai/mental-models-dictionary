import { combineReducers } from 'redux';
import {
  categoriesReducer,
  CategoriesInitialState,
  CategoriesState,
} from './categories.reducer';
export type State = {
  categories: CategoriesState;
};

export const initialState = {
  categories: CategoriesInitialState,
};

export const rootReducer = combineReducers({
  categories: categoriesReducer,
});
