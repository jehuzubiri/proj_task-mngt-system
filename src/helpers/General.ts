export const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

export const getDateTimeNow = (): string => {
  var currentdate = new Date();
  var hours = currentdate.getHours();
  var minutes = currentdate.getMinutes();
  var ampm = hours >= 12 ? "PM" : "AM";
  hours = hours % 12;
  hours = hours ? hours : 12; // the hour '0' should be '12'
  minutes = minutes < 10 ? 0 + minutes : minutes;
  var strTime = hours + ":" + minutes + " " + ampm;
  const monthNow = months[currentdate.getMonth()];
  return `${strTime} ${monthNow} ${currentdate.getDate()}, ${currentdate.getFullYear()}`;
};
