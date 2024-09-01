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
