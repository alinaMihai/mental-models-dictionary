import { put, takeLatest } from 'redux-saga/effects';
import {
  FETCH_EXTRA_RESOURCES_START,
  fetchExtraResourcesFailureAction,
  fetchExtraResourcesSuccessAction,
} from '../actions/resources.action';

import { fetchMethod } from './categories.saga';

function* fetchExtraResourcesSaga() {
  try {
    const body = yield fetchMethod({
      path: '/api/resources',
    });
    yield put(fetchExtraResourcesSuccessAction(body));
  } catch (err) {
    yield put(fetchExtraResourcesFailureAction(err));
  }
}

export function* resourcesSagas() {
  yield takeLatest(FETCH_EXTRA_RESOURCES_START, fetchExtraResourcesSaga);
}
