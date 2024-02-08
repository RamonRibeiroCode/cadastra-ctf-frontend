import dayjs from "dayjs";

export const getLowerSnakeName = (name: string) => {
  return name.toLowerCase().trim().replaceAll(" ", "_");
};

export const padHour = (number: number) => {
  return number.toString().padStart(2, "0");
};

export const getMinutesBySeconds = (seconds: number) => {
  return parseInt((seconds / 60).toString());
};

export const getRemaningSeconds = (seconds: number) => {
  return seconds % 60;
};

export const formatDateAndYear = (dateString: string) => {
  // INPUT: 2023-08-21T00:00:00Z
  // OUTPUT: 21 August, 2023

  const date = dayjs(dateString).format("DD MMMM, YYYY");

  return date;
};

export const formatShortDate = (dateString: string) => {
  // INPUT: 2023-08-21T00:00:00Z
  // OUTPUT: 21/08/2023

  return dayjs(dateString).format("DD/MM/YYYY");
};

export const formatHourDate = (dateString: string) => {
  // INPUT: 2023-08-21T00:00:00Z
  // OUTPUT: 00:00:00

  return dayjs(dateString).format("HH:mm:ss");
};

export const getFormattedTimeAgo = (dateString: string) => {
  // INPUT: 2023-08-21T00:00:00Z
  // OUTPUT: 18

  const secondsAgo = dayjs(new Date()).diff(dateString, "seconds");

  if (secondsAgo < 60) {
    return {
      label: secondsAgo === 1 ? "second" : "seconds",
      time: secondsAgo,
    };
  }

  if (secondsAgo < 60 * 60) {
    const minutesAgo = Math.round(secondsAgo / 60);

    return {
      label: minutesAgo === 1 ? "minute" : "minutes",
      time: minutesAgo,
    };
  }

  if (secondsAgo < 60 * 60 * 60) {
    const hoursAgo = Math.round(secondsAgo / 60 / 60);

    return {
      label: hoursAgo === 1 ? "hour" : "hours",
      time: hoursAgo,
    };
  }

  const daysAgo = Math.round(secondsAgo / 60 / 60 / 24);

  return {
    label: daysAgo === 1 ? "day" : "days",
    time: daysAgo,
  };
};

export const jsonToFormData = (json: any) => {
  const formData = new FormData();

  Object.keys(json).forEach((key) => {
    formData.append(key, json[key]);
  });

  return formData;
};
