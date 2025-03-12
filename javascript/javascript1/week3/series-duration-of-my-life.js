const TvSeriesDurations = [
  { title: "One planet", days: 10, hours: 22, minutes: 12 },
  { title: "Seven Worlds—One Planet", days: 21, hours: 4, minutes: 58 },
];
function logOutTvSeriesText() {
  const averageLifeSpan = 80;
  let totalPercentage = 0;

  for (let TvSeries of TvSeriesDurations) {
    let years =
      TvSeries.days / 365 +
      TvSeries.hours / (365 * 24) +
      TvSeries.minutes / (365 * 24 * 60);

    let percentage = (years / averageLifeSpan) * 100;
    totalPercentage += percentage;

    console.log(
      TvSeries.title + " took " + percentage.toFixed(3) + "% of my life."
    );
  }

  console.log(
    "In total that is " + totalPercentage.toFixed(3) + "% of my life."
  );
}

logOutTvSeriesText();
