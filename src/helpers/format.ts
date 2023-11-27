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
