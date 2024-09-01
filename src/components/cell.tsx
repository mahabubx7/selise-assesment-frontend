import { AppointmentState } from '@/store/appointment';
import { convertTimeToDate } from '@/utils';
import styled from 'styled-components';
import { AppointmentDetails } from './details';

const CalenderDay = styled.div`
  display: flex;
  flex-direction: column;
  padding: 1.5rem 1rem;
  text-align: center;
  background-color: #f0f0f0;
  cursor: pointer;
  transition: all 0.3s ease-in-out;
  border-radius: 0.25rem;

  &:hover {
    background-color: #e0e0e0;
  }
`;

const ApptDiv = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
  overflow: hidden;
  overflow-y: scroll;
  max-height: 4.2rem;
`;

export function Cell(props: { day: number; bookings: AppointmentState[] }) {
  const list = props.bookings.sort((a, b) => {
    // sort by field object.time
    return (
      convertTimeToDate(a.time).getTime() - convertTimeToDate(b.time).getTime()
    );
  }); // sorting by time

  return (
    <CalenderDay>
      <div>{props.day}</div>
      <ApptDiv>
        {list.map((booking, index) => (
          <AppointmentDetails key={index} data={booking} />
        ))}
      </ApptDiv>
    </CalenderDay>
  );
}
