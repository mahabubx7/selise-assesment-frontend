import { Appointment, Calender } from '@/components';
import { months, years } from '@/constants';
import { CalendarSliceState, updateCalendar } from '@/store/calendar';
import { composeRoute } from '@/utils';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

export interface FormState {
  year: number;
  month: number;
}

const PageDiv = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 1.25rem auto;
  padding: 0 0.5rem;
`;

const Form = styled.form`
  display: flex;
  align-items: center;
  gap: 1rem;
`;

export function CalenderPage() {
  // redux implementation
  const dispatch = useDispatch();
  const calendarState = useSelector(
    (state: { calendar: CalendarSliceState }) => state.calendar,
  );

  const navigate = useNavigate();

  // state for form-data
  const [formData, setFormData] = useState<FormState>({
    year: calendarState.selectedYear,
    month: calendarState.selectedMonth,
  });

  // on select change, update the route
  useEffect(() => {
    dispatch(
      updateCalendar({
        selectedMonth: formData.month,
        selectedYear: formData.year,
      }),
    );

    const routeLink: string = composeRoute(formData.year, formData.month);
    return navigate(routeLink);
  }, [formData.month, formData.year, dispatch, navigate]);

  return (
    <>
      <PageDiv id="navigator">
        <Form>
          <label>
            Year:
            <select
              name="year"
              onChange={(e: React.ChangeEvent<HTMLSelectElement>) =>
                setFormData({
                  ...formData,
                  year: parseInt(e.target.value, 10),
                })
              }
              defaultValue={formData.year}
            >
              {years.map((year) => (
                <option key={year} value={year}>
                  {year}
                </option>
              ))}
            </select>
          </label>

          <label>
            Month:
            <select
              name="month"
              onChange={(e: React.ChangeEvent<HTMLSelectElement>) =>
                setFormData({
                  ...formData,
                  month: parseInt(e.target.value, 10),
                })
              }
              defaultValue={formData.month}
            >
              {months.map((month) => (
                <option key={month} value={month}>
                  {month}
                </option>
              ))}
            </select>
          </label>
        </Form>

        <Appointment />
      </PageDiv>

      <div id="calender">
        <Calender year={formData.year} month={formData.month} />
      </div>
    </>
  );
}
