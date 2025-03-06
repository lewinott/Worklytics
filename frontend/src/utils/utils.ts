export const formatDateToBR = (dateStr: string, sep?: string) => {
  sep = sep ? sep : "/";

  const [year, month, day] = dateStr.split(sep);
  return `${day}${sep}${month}${sep}${year}`;
};

export const formatDateToUS = (dateStr: string, sep?: string) => {
  sep = sep ? sep : "/";

  const [day, month, year] = dateStr.split(sep);
  return `${year}${sep}${month}${sep}${day}`;
};

