import { configureStore } from '@reduxjs/toolkit';
import userReducer from './slices/userSlice';
import missingPersonReducer from './slices/missingPersonSlice';

export const store = configureStore({
  reducer: {
    user: userReducer,
    missingPerson: missingPersonReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
