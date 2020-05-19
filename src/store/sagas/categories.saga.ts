import { put, call, takeLatest } from 'redux-saga/effects';
import {
  FETCH_CATEGORIES_START,
  fetchCategoriesFailureAction,
  fetchCategoriesSuccessAction,
} from '../actions/categories.action';
import { apiBase } from 'helpers/app.constants';

export function* fetchMethod({
  path,
  params,
  options,
}: {
  path: string;
  params?: Record<string, any>;
  options?: Record<string, any>;
}) {
  const url = new URL(`${apiBase || window.origin}${path}`);

  if (params) {
    Object.entries(params).forEach(([key, value]) => {
      url.searchParams.append(key, value || '');
    });
  }
  const res: Response = yield call(fetch, url.toString(), options);
  const body = yield res.json();

  return body;
}

function* fetchCategoriesSaga() {
  try {
    const body = yield fetchMethod({
      path: '/api/categories',
    });
    yield put(fetchCategoriesSuccessAction(body));
  } catch (err) {
    yield put(fetchCategoriesFailureAction(err));
  }
}

export function* categoriesSagas() {
  yield takeLatest(FETCH_CATEGORIES_START, fetchCategoriesSaga);
}
