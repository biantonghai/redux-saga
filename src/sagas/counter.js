import { INCREMENTASYNC } from "../constants/counter";
import { increment } from "../actions/counter";
import { takeEvery, put} from "redux-saga/effects";

const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));
function* incrementasync() {
  yield delay(2000);
  yield put(increment());
}
export function* helloSaga() {
  yield takeEvery(INCREMENTASYNC, incrementasync);
}