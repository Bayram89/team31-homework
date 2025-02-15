// an arrray of weekdays
const days = [
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
  "Sunday",
];

// here apparently I need to write a function that finds the event day calculating from today
function getEventDay(daysFromToday) {
  let today = new Date().getDay(); // What's the day today? Gets me todays day number
  const eventDay = (today + daysFromToday) % 7; //  When's the event day? Finds that
  return days[eventDay];
}
console.log(getEventDay(0));
console.log(getEventDay(7));
