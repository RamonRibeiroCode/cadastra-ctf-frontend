export const getLowerSnakeName = (name: string) => {
  return name.toLowerCase().trim().replaceAll(" ", "_");
};

export const padHour = (number: number) => {
  return number.toString().padStart(2, "0");
};
