import {
  Actions,
  FETCH_CATEGORIES_SUCCESS,
  FETCH_CATEGORIES_START,
  FETCH_CATEGORIES_FAILURE,
} from '../actions/categories.action';
import { BookItem } from 'screens/landing/components/book/Book';
export type CategoriesState = {
  categories: BookItem[];
  isLoading: boolean;
  hasError: boolean;
};

export const CategoriesInitialState: CategoriesState = {
  categories: [],
  isLoading: false,
  hasError: false,
};

export const categoriesReducer = (
  state: CategoriesState = CategoriesInitialState,
  action: Actions,
): CategoriesState => {
  switch (action.type) {
    case FETCH_CATEGORIES_SUCCESS:
      return {
        ...state,
        isLoading: false,
        hasError: false,
        categories: action.payload.categories,
      };
    case FETCH_CATEGORIES_START:
      return { ...state, isLoading: true };
    case FETCH_CATEGORIES_FAILURE:
      return { ...state, isLoading: false, hasError: true };
    default:
      return state;
  }
};
