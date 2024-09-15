import { Appointments } from '@/store/appointment';
import { getDaysCount, mapByDay } from '@/utils';
import { useSelector } from 'react-redux';
import styled from 'styled-components';
import { Cell } from './cell';

interface ICalenderProps {
  year: number;
  month: number;
}

const CalenderGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  gap: 0.25rem;
  margin-top: 1rem;
  padding: 0.5rem;
`;

export function Calender(props: ICalenderProps) {
  const getDays = getDaysCount(props.year, props.month);

  // load bookings from redux
  const bookings = useSelector(
    (state: { appointment: Appointments }) => state.appointment.bookings,
  );

  const currentMonthBookings = bookings.filter(
    (booking) =>
      new Date(booking.date).getFullYear() === props.year &&
      new Date(booking.date).getMonth() === props.month - 1,
  );

  const mappedDay = mapByDay(currentMonthBookings);
  
  return (
    <>
      <CalenderGrid id="calendar-grid">
        {Array.from({ length: getDays }, (_, i) => (
          <Cell
            key={i}
            day={i + 1}
            bookings={mappedDay.get(i + 1)}
          />
        ))}
      </CalenderGrid>
    </>
  );
}
