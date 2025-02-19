function calculateTravelTime(travelInfo) {
  const timeInHours = travelInfo.destinationDistance / travelInfo.speed;

  const hours = Math.floor(timeInHours);
  const minutes = Math.floor((timeInHours - hours) * 60);
  return formatTime(hours, minutes);
}

function formatTime(hours, minutes) {
  if (hours >= 24) {
    const days = Math.floor(hours / 24);
    const remainingHours = hours % 24;

    if (remainingHours === 0 && minutes === 0) {
      return days + " days";
    } else if (remainingHours === 0) {
      return days + " days" + minutes + " minutes"; //Though it is not common to come across this on real life situation (for example 2 days and 01 minutes OR even 59 minutes), I have included it for the sake of the exercise anyway
    } else if (minutes === 0) {
      return days + " days and " + remainingHours + " hours";
    }
    return (
      days + " days, " + remainingHours + " hours and " + minutes + " minutes"
    );
  }

  if (hours === 0) {
    return minutes + " minutes";
  } else if (minutes === 0) {
    return hours + " hours";
  }

  return hours + " hours and " + minutes + " minutes";
}

const travelInfo = {
  speed: 11,
  destinationDistance: 1300,
};

const travelTime = calculateTravelTime(travelInfo);
console.log(travelTime);
