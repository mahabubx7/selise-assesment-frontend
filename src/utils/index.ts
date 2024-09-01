// compose route for year and month based on the selected values
export const composeRoute = (year: number, month: number): string => {
  return `/year/${year}/month/${month}`;
};

// get current year and montn to compose the route
export const getCurrentYearAndMonth = () => {
  const date = new Date();
  // return the route url with current year and month
  return composeRoute(date.getFullYear(), date.getMonth() + 1);
};

// get current year and montn to compose the route and return an array
export const getCurrentYearAndMonthArray = () => {
  const date = new Date();
  // return the route url with current year and month
  return [date.getFullYear(), date.getMonth() + 1];
};

// get days count of a month
export const getDaysCount = (year: number, month: number): number => {
  // check february first
  if (month === 2) {
    // check if it's a leap year
    if (year % 4 === 0) {
      return 29;
    }
    return 28;
  }

  // check for 30 days month
  if ([4, 6, 9, 11].includes(month)) {
    return 30;
  }

  // return 31 days month
  return 31;
};

// convert time string to 12 hours format date
export const convertTimeToDate = (time: string): Date => {
  const [hours, minutes] = time.split(':');
  const currentDate = new Date();
  currentDate.setHours(Number(hours));
  currentDate.setMinutes(Number(minutes));
  return currentDate;
};
