import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { HistoryObj } from '../types/HistoryObj';

const savedHistory = localStorage.getItem('tests-history');
const initialState: HistoryObj[][] = savedHistory !== null ? JSON.parse(savedHistory) : [];

const historySlice = createSlice({
  name: 'tests-history',
  initialState,
  reducers: {
    add: (testsHistory, action: PayloadAction<HistoryObj[]>) => {
      testsHistory.push(action.payload);
      localStorage.setItem('tests-history', JSON.stringify(testsHistory));

      return testsHistory;
    },
  },
});

export default historySlice.reducer;
export const { actions } = historySlice;
