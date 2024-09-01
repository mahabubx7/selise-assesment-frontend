import { createSlice, PayloadAction } from '@reduxjs/toolkit';

const demo = [
  {
    name: 'John Doe',
    gender: 'male',
    age: 25,
    date: new Date('2019-09-01'),
    time: '10:00',
  },
  {
    name: 'John Doe 2',
    gender: 'male',
    age: 25,
    date: new Date('2019-09-01'),
    time: '10:00',
  },

  {
    name: 'Jane Doe',
    gender: 'female',
    age: 23,
    date: new Date('2019-08-31'),
    time: '15:00',
  },
  {
    name: 'John Doe 3',
    gender: 'male',
    age: 25,
    date: new Date('2019-09-01'),
    time: '09:00',
  },
  {
    name: 'Md. Mahabub Alam',
    gender: 'male',
    age: 24,
    date: new Date('2019-09-01'),
    time: '11:00',
  },
] as AppointmentState[];

export type AppointmentState = {
  name: string;
  gender: 'male' | 'female' | 'others';
  age: number;
  date: Date | string;
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
