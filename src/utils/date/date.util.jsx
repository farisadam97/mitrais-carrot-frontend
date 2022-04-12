const DateLocalization = {
  id: "id",
  us: "us",
};

const GetLastMonthDate = (separator, locale) => {
  const date = new Date();

  const year = date.getFullYear();
  const month = ("0" + (date.getMonth())).slice(-2);
  const day = ("0" + date.getDate()).slice(-2);

  if (locale === DateLocalization.id) {
    return [day, month, year].join(separator);
  }

  return [year, month, day].join(separator);
};

const GetCurrentDate = (separator, locale) => {
  const date = new Date();

  const year = date.getFullYear();
  const month = ("0" + (date.getMonth() + 1)).slice(-2);
  const day = ("0" + date.getDate()).slice(-2);

  if (locale === DateLocalization.id) {
    return [day, month, year].join(separator);
  }

  return [year, month, day].join(separator);
};

const GetCurrentDateWithTime = (dateSeparator, timeSeparator, locale) => {
  const date = new Date();

  const year = date.getFullYear();
  const month = date.getMonth() + 1;
  const day = date.getDate();
  const hour = date.getHours();
  const minute = date.getMinutes();
  const second = date.getSeconds();

  const timeFormat = [hour, minute, second].join(timeSeparator);

  if (locale === DateLocalization.id) {
    return [day, month, year].join(dateSeparator) + " " + timeFormat;
  }

  return [year, month, day].join(dateSeparator) + " " + timeFormat;
};

export { GetLastMonthDate, GetCurrentDate, GetCurrentDateWithTime };
