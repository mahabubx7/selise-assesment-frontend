import { AppontmentState } from '@/store/appointment';
import { convertTimeToDate } from '@/utils';
import styled from 'styled-components';

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
  max-height: 3.8rem;
`;

const Appt = styled.span`
  text-align: left;
  font-size: 0.65rem;
`;

export function Cell(props: { day: number; bookings: AppontmentState[] }) {
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
          <Appt key={index}>{booking.name}</Appt>
        ))}
      </ApptDiv>
    </CalenderDay>
  );
}
