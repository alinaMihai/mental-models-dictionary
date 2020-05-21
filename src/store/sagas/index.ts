import { all, fork } from 'redux-saga/effects';

import { categoriesSagas } from './categories.saga';
import { modelsSagas } from './models.saga';
import { resourcesSagas } from './resources.saga';

/**
 * Root for saga
 */
export function* rootSaga() {
  yield all([fork(categoriesSagas), fork(modelsSagas), fork(resourcesSagas)]);
}
