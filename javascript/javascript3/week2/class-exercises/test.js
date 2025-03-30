//test these fake APIs using:

//Promise.all()
//Promise.allSettled()
//Promise.race()

function getRandomDelay() {
  return Math.floor(Math.random() * 2000) + 1000;
}

function fetchWeather() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("☀️ Weather: Sunny");
    }, getRandomDelay());
  });
}

function fetchUserInfo() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("👤 User: John Doe");
    }, getRandomDelay());
  });
}

function fetchNews() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const success = Math.random() < 0.5; // 50% chance
      if (success) {
        resolve("🗞️ News: Market is up!");
      } else {
        reject("🚫 News failed to load");
      }
    }, getRandomDelay());
  });
}

// Using Promise.all()
Promise.all([fetchWeather(), fetchUserInfo(), fetchNews()])
  .then(console.log)
  .catch(console.error);

// Using Promise.allSettled()
Promise.allSettled([fetchWeather(), fetchUserInfo(), fetchNews()]).then(
  console.log
);

// Using Promise.race()
Promise.race([fetchWeather(), fetchUserInfo(), fetchNews()])
  .then(console.log)
  .catch(console.error);
