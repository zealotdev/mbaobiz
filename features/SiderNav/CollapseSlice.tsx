import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface CollapseState {
  value: boolean;
}

const initialState: CollapseState = {
  value: true,
};

export const CollapseSlice = createSlice({
  name: 'callapse',
  initialState,
  reducers: {
    change: (state, action: PayloadAction<boolean>) => {
      state.value = action.payload;
    },
  },
});

export const { change } = CollapseSlice.actions;
export default CollapseSlice.reducer;
