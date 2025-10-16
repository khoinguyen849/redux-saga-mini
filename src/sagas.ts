import { all, call, fork, put, takeLatest, delay, takeEvery } from 'redux-saga/effects'
import { actions } from './counterSlice'

function apiIncrease(amount: number) {
  return new Promise<number>((resolve) => setTimeout(() => resolve(amount), 800))
}

export function* rootSaga() {
  yield fork(function* backgroundTicker() {
    yield delay(0)
  })

  yield takeLatest(actions.incrementAsyncRequested.type, function* (action: ReturnType<typeof actions.incrementAsyncRequested>) {
    try {
      const result: number = yield call(apiIncrease, action.payload)
      yield put(actions.incrementAsyncSucceeded(result))
    } catch (e) {
      yield put(actions.incrementAsyncFailed((e as Error).message))
    }
  })
}

export function* rootSagaAll() {
  yield all([call(rootSaga)])
}
