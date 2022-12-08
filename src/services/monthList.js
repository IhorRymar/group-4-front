export const months = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December'
];

export const convertMonthNameToNumber = (month, year) => {
    return new Date(`${month} 1, ${year}`).getMonth() + 1;
  }