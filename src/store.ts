import { configureStore } from '@reduxjs/toolkit'
import createSagaMiddleware from 'redux-saga'
import counterReducer from './counterSlice'
import { rootSagaAll } from './sagas'

const sagaMiddleware = createSagaMiddleware()

export const store = configureStore({
  reducer: {
    counter: counterReducer,
  },
  middleware: (getDefault) => getDefault({ thunk: false }).concat(sagaMiddleware),
})

sagaMiddleware.run(rootSagaAll)

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
