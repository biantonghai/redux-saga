import { takeEvery, put, call } from "redux-saga/effects";
import {
  FETCH_USER_REQUEST,
  FETCH_USER_SUCCESS,
  FETCH_USER_FAILURE,
} from "../constants/user";
import axios from "axios";
function* fetch_user_request() {
  try {
    const user = yield call(
      axios.get,
      "https://jsonplaceholder.typicode.com/users"
    );
    yield put({ type: FETCH_USER_SUCCESS, user });
  } catch (error) {
    yield put({ type: FETCH_USER_FAILURE, error });
  }
}
export function* watchFetchUser() {
  yield takeEvery(FETCH_USER_REQUEST, fetch_user_request);
}
