import { all, fork } from "redux-saga/effects";
import * as userSagas from './user'
import * as counterSagas from './counter'

export default function* rootSaga() {
  yield all([
    ...Object.values(userSagas),
    ...Object.values(counterSagas)
  ].map(fork));
}
