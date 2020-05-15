export const FETCH_CATEGORIES_START = 'FETCH_CATEGORIES_START';
export const fetchCategoriesAction = () =>
  ({
    type: FETCH_CATEGORIES_START,
  } as const);
export const FETCH_CATEGORIES_SUCCESS = 'FETCH_CATEGORIES_SUCCESS';
export const fetchCategoriesSuccessAction = (categories) =>
  ({
    type: FETCH_CATEGORIES_SUCCESS,
    payload: { categories },
  } as const);
export const FETCH_CATEGORIES_FAILURE = 'FETCH_CATEGORIES_FAILURE';
export const fetchCategoriesFailureAction = (err: Error) =>
  ({
    type: FETCH_CATEGORIES_FAILURE,
    payload: { err },
  } as const);

export type Actions =
  | ReturnType<typeof fetchCategoriesAction>
  | ReturnType<typeof fetchCategoriesSuccessAction>
  | ReturnType<typeof fetchCategoriesFailureAction>;
