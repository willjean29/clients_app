export const formatDate = (date: Date) => {
  const dateFormat = new Date(date);
  const newDate = `${dateFormat.getDate()}/${
    dateFormat.getMonth() + 1
  }/${dateFormat.getFullYear()}`;
  return newDate;
};
