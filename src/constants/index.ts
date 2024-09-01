import { AppointmentState } from '@/store/appointment';

export const years: number[] = [2019, 2020, 2021];

export const months: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

// booking appointment demo data <Initial>
export const demo = [
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
