import { configureStore } from '@reduxjs/toolkit';
import historyReducer from '../features/historyReducer';
import vocabularyReducer from '../features/vocabularyReducer';

const store = configureStore({
  reducer: {
    vocabulary: vocabularyReducer,
    history: historyReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
