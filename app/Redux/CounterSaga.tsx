import { all, delay, put, takeLatest } from 'redux-saga/effects';

function* incrementAsync() {
  yield delay(5000); // Simulate delay
console.log("incemrnet")
  yield put({ type: 'INCREMENT' });
}

function* watchIncrementAsync() {
    console.log("watch")
  yield takeLatest('INCREMENT_ASYNC', incrementAsync);
}

export default function* rootSaga() {
  yield all([
    watchIncrementAsync(),
    // Add other sagas here
  ]);
}
