import { demo } from '@/constants';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export type AppointmentState = {
  name: string;
  gender: 'male' | 'female' | 'others';
  age: number;
  date: Date;
  time: string;
};

export type Appointments = {
  bookings: AppointmentState[];
};

const loadAppointment = () => {
  const appointment = localStorage.getItem('appointment');
  if (appointment) {
    return JSON.parse(appointment) as AppointmentState[];
  }

  localStorage.setItem('appointment', JSON.stringify(demo)); // set demo
  return demo; // with some demo data
};

const initialState: Appointments = {
  bookings: loadAppointment(),
};

export const appointmentSlice = createSlice({
  name: 'appointment',
  initialState,
  reducers: {
    addAppointment: (
      state: Appointments,
      action: PayloadAction<AppointmentState>,
    ) => {
      const updated = [...state.bookings, action.payload];
      state.bookings = updated;
      localStorage.setItem('appointment', JSON.stringify(state.bookings));
    },
  },
});

export const { addAppointment } = appointmentSlice.actions;
export const getAppointment = (state: { appointment: AppointmentState[] }) =>
  state.appointment;
export default appointmentSlice.reducer;
