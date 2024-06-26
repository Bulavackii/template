import { configureStore } from '@reduxjs/toolkit';
import createSagaMiddleware from 'redux-saga';
import { exampleSlice } from './slices/exampleSlice';
import { exampleSaga } from '../sagas/exampleSaga';

const sagaMiddleware = createSagaMiddleware();

const store = configureStore({
  reducer: {
    example: exampleSlice.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ thunk: true }).concat(sagaMiddleware),
});

sagaMiddleware.run(exampleSaga);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;