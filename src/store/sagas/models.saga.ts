import { put, takeLatest } from 'redux-saga/effects';
import {
  FETCH_MODELS_START,
  FETCH_MODELS_BY_CATEGORY_START,
  fetchModelsFailureAction,
  fetchModelsSuccessAction,
  fetchModelsByCategoryAction,
  fetchModelsByCategorySuccessAction,
  fetchModelsByCategoryFailureAction,
} from '../actions/models.action';
import { fetchMethod } from './categories.saga';

function* fetchModelsSaga() {
  try {
    const body = yield fetchMethod({
      path: '/api/models',
    });
    yield put(fetchModelsSuccessAction(body));
  } catch (err) {
    yield put(fetchModelsFailureAction(err));
  }
}

function* fetchModelsByCategorySaga(
  actions: ReturnType<typeof fetchModelsByCategoryAction>,
) {
  try {
    const body = yield fetchMethod({
      path: `/api/models/${actions.payload.categoryId}`,
    });
    yield put(fetchModelsByCategorySuccessAction(body));
  } catch (err) {
    yield put(fetchModelsByCategoryFailureAction(err));
  }
}

export function* modelsSagas() {
  yield takeLatest(FETCH_MODELS_START, fetchModelsSaga);
  yield takeLatest(FETCH_MODELS_BY_CATEGORY_START, fetchModelsByCategorySaga);
}
