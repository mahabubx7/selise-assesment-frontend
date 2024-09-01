import { months, years } from '@/constants';
import { composeRoute, getCurrentYearAndMonth } from '@/utils';
import { Form, Navigate } from 'react-router-dom';

export function CalenderPage() {
  // check for form-data & redirect to the current-route if not found
  const currentRoute = window.location.pathname;
  if (!currentRoute.includes('year') || !currentRoute.includes('month')) {
    const current = getCurrentYearAndMonth();
    return <Navigate to={current} />;
  }

  // on select change, update the route
  const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const year = event.target.form?.year.value;
    const month = event.target.form?.month.value;
    if (year && month) {
      const routeLink: string = composeRoute(parseInt(year), parseInt(month));
      return <Navigate to={routeLink} />;
    }
  };

  return (
    <>
      <div id="navigator">
        <Form>
          <label>
            Year:
            <select name="year" onSelect={handleChange}>
              {years.map((year) => (
                <option key={year} value={year}>
                  {year}
                </option>
              ))}
            </select>
          </label>
          <label>
            Month:
            <select name="month" onSelect={handleChange}>
              {months.map((month) => (
                <option key={month} value={month}>
                  {month}
                </option>
              ))}
            </select>
          </label>
        </Form>
      </div>

      <div id="calender">
        <p>calender table in here!</p>
      </div>
    </>
  );
}
