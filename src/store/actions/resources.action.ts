export const FETCH_EXTRA_RESOURCES_START = 'FETCH_EXTRA_RESOURCES_START';
export const fetchExtraResourcesAction = () =>
  ({
    type: FETCH_EXTRA_RESOURCES_START,
  } as const);
export const FETCH_EXTRA_RESOURCES_SUCCESS = 'FETCH_EXTRA_RESOURCES_SUCCESS';
export const fetchExtraResourcesSuccessAction = (resources) =>
  ({
    type: FETCH_EXTRA_RESOURCES_SUCCESS,
    payload: { resources },
  } as const);
export const FETCH_EXTRA_RESOURCES_FAILURE = 'FETCH_EXTRA_RESOURCES_FAILURE';
export const fetchExtraResourcesFailureAction = (err: Error) =>
  ({
    type: FETCH_EXTRA_RESOURCES_FAILURE,
    payload: { err },
  } as const);

export type ResourcesActionTypes =
  | ReturnType<typeof fetchExtraResourcesAction>
  | ReturnType<typeof fetchExtraResourcesSuccessAction>
  | ReturnType<typeof fetchExtraResourcesFailureAction>;
