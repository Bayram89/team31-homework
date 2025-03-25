console.log("------>>> Smart phone usage app <<<------");

const activities = [];
const usageLimit = 100;

function addActivity(date, activity, duration) {
  activities.push({ date, activity, duration });
}

function showStatus() {
  if (activities.length === 0) {
    console.log("Add some activities before calling showStatus");
    return;
  }

  let totalDuration = 0;
  for (let i = 0; i < activities.length; i++) {
    totalDuration += activities[i].duration;
  }

  console.log(
    "You have spent " + totalDuration + " minutes on your screen today."
  );

  if (totalDuration > usageLimit) {
    console.log("You have reached your limit, stop using your phone!");
  }
}

addActivity("23/7-18", "News", 10);
addActivity("23/7-18", "Meditation", 79);
addActivity("23/7-18", "Start-up ideas on YT", 156);

showStatus();

// I got confused when I tried to add "extra feature" at the last part of the exercise. Hoping though I will look at that again soon
