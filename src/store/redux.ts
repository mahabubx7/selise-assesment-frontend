import { configureStore } from '@reduxjs/toolkit';
import { appointmentSlice } from './appointment';
import { calendarSlice } from './calendar';

export const store = configureStore({
  reducer: {
    calendar: calendarSlice.reducer,
    appointment: appointmentSlice.reducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
