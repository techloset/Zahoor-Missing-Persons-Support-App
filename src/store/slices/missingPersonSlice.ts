import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { MissingPerson } from '../../types/types';

export interface MissingPersonState {
  missingPerson: MissingPerson | null;
  missingPersonLoading: boolean;
}

const initialState: MissingPersonState = {
  missingPerson: null,
  missingPersonLoading: false,
};

export const missingPersonSlice = createSlice({
  name: 'missingPerson',
  initialState,
  reducers: {
    setMissingPerson: (state, action: PayloadAction<MissingPerson | null>) => {
      state.missingPerson = action.payload;
    },
    setUserLoading: (state, action: PayloadAction<boolean>) => {
      state.missingPersonLoading = action.payload;
    },
  },
});

export const { setMissingPerson, setUserLoading } = missingPersonSlice.actions;
export default missingPersonSlice.reducer;
