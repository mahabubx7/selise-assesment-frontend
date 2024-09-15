// CALENDAR slice

import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export type CalendarSliceState = {
  updated?: boolean;
  selectedYear: number;
  selectedMonth: number;
};

const loadLocalStorage = () => {
  const calendar = localStorage.getItem('calendar');
  if (calendar) {
    return JSON.parse(calendar) as CalendarSliceState;
  }
  return null;
};

const calendar = loadLocalStorage();
// console.log('calendar-local ', calendar);

const initialState: CalendarSliceState = (calendar as CalendarSliceState) || {
  selectedMonth: new Date().getMonth() + 1,
  selectedYear: 2021, // fixing current year range as expected
};

// console.log('in-- ', initialState);

export const calendarSlice = createSlice({
  name: 'calendar',
  initialState,
  reducers: {
    updateCalendar: (
      state: CalendarSliceState,
      action: PayloadAction<CalendarSliceState>,
    ) => {
      state.selectedYear = action.payload.selectedYear;
      state.selectedMonth = action.payload.selectedMonth;
      localStorage.setItem('calendar', JSON.stringify(state));
    },
  },
});

export const { updateCalendar } = calendarSlice.actions;
export const getCalendar = (state: { calendar: CalendarSliceState }) =>
  state.calendar;
export default calendarSlice.reducer;
