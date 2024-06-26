import { takeEvery, put } from 'redux-saga/effects';
import { increment, decrement } from '../redux/slices/exampleSlice';

function* incrementSaga() {
  yield put(increment());
}

function* decrementSaga() {
  yield put(decrement());
}

export function* exampleSaga() {
  yield takeEvery('example/incrementAsync', incrementSaga);
  yield takeEvery('example/decrementAsync', decrementSaga);
}