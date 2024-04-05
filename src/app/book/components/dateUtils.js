export const getCurrentday = () => {
  const currentDate = new Date();
  const day = currentDate.getDate();
  const month = currentDate.getMonth();
  const daysInMonth = new Date(
    currentDate.getFullYear(),
    currentDate.getMonth() + 1,
    0,
  ).getDate();

  return { day, daysInMonth, month };
};

export const getDayAndWeekday = (index) => {
  if (typeof index !== "number") {
    throw new Error("index must be a number");
  }

  const currentDate = new Date();
  currentDate.setDate(currentDate.getDate() + index);

  return {
    day: currentDate.getDate(),
    weekday: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"][
      currentDate.getDay()
    ],
  };
};
