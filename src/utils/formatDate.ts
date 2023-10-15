const convertMonthToString = (month: number) => {
  const months = [
    "Ene",
    "Feb",
    "Mar",
    "Abr",
    "May",
    "Jun",
    "Jul",
    "Ago",
    "Sep",
    "Oct",
    "Nov",
    "Dic",
  ];
  return months[month];
};

export const formatDate = (date: Date) => {
  const newDate = new Date(date);

  const day = newDate?.getDate();
  const month = newDate?.getMonth();
  const year = newDate?.getFullYear();

  return `${day} ${convertMonthToString(month)} ${year}`;
};
