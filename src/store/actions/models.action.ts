export const FETCH_MODELS_START = 'FETCH_MODELS_START';
export const fetchModelsAction = () =>
  ({
    type: FETCH_MODELS_START,
  } as const);
export const FETCH_MODELS_SUCCESS = 'FETCH_MODELS_SUCCESS';
export const fetchModelsSuccessAction = (models) =>
  ({
    type: FETCH_MODELS_SUCCESS,
    payload: { models },
  } as const);
export const FETCH_MODELS_FAILURE = 'FETCH_MODELS_FAILURE';
export const fetchModelsFailureAction = (err: Error) =>
  ({
    type: FETCH_MODELS_FAILURE,
    payload: { err },
  } as const);

export const FETCH_MODELS_BY_CATEGORY_START = 'FETCH_MODELS_BY_CATEGORY_START';
export const fetchModelsByCategoryAction = (categoryId) => ({
  type: FETCH_MODELS_BY_CATEGORY_START,
  payload: { categoryId, models: [] },
});

export const FETCH_MODELS_BY_CATEGORY_SUCCESS =
  'FETCH_MODELS_BY_CATEGORY_SUCCESS';
export const fetchModelsByCategorySuccessAction = (models) =>
  ({
    type: FETCH_MODELS_BY_CATEGORY_SUCCESS,
    payload: { models },
  } as const);
export const FETCH_MODELS_BY_CATEGORY_FAILURE =
  'FETCH_MODELS_BY_CATEGORY_FAILURE';
export const fetchModelsByCategoryFailureAction = (err: Error) =>
  ({
    type: FETCH_MODELS_BY_CATEGORY_FAILURE,
    payload: { err },
  } as const);

export type ModelsActionsTypes =
  | ReturnType<typeof fetchModelsAction>
  | ReturnType<typeof fetchModelsSuccessAction>
  | ReturnType<typeof fetchModelsFailureAction>
  | ReturnType<typeof fetchModelsByCategoryAction>
  | ReturnType<typeof fetchModelsByCategorySuccessAction>
  | ReturnType<typeof fetchModelsByCategoryFailureAction>;
