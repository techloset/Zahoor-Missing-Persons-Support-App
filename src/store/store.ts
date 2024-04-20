import { configureStore } from '@reduxjs/toolkit';
import authReducer from './slices/authSlice';
import firestoreReducer from './slices/firestoreSlice';
import { useDispatch, useSelector } from 'react-redux';

export const useAppDispatch = useDispatch.withTypes<AppDispatch>();
export const useAppSelector = useSelector.withTypes<RootState>();
const store = configureStore({
  reducer: {
    auth: authReducer,
    firestore: firestoreReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
