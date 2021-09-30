import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface business {
  id: number;
  name: string;
  description: string;
}

const initialState: business[] = [];

export const BusinessListSlice = createSlice({
  name: 'businessList',
  initialState,
  reducers: {
    addBusiness(state, action: PayloadAction<business>) {
      state.push(action.payload);
    },
  },
});

export const { addBusiness } = BusinessListSlice.actions;
export default BusinessListSlice.reducer;
