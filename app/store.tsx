import { configureStore } from '@reduxjs/toolkit';
import collapseReducer from '../features/SiderNav/CollapseSlice';
import bussinessListReducer from './../features/business/BusinessSlice';

export const store = configureStore({
  reducer: { collapse: collapseReducer, bussiness: bussinessListReducer },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
