console.log(" --- > This is a Podcast Exercise < --- ");
const podcasts = [
  {
    name: "The mystery om of Johan Klausen Varbourg",
    imageUrl: "https://picsum.photos/536/354",
  },
  {
    name: "Tips about dogs with small legs",
    imageUrl: "https://picsum.photos/536/354",
  },
  {
    name: "You, me, we and us",
    imageUrl: "https://picsum.photos/536/354",
  },
  {
    name: "Breakfast news - Dinner edition",
  },
];

const podcastsUl = document.createElement("ul");

podcasts.forEach(function (podcast) {
  const podcastLi = document.createElement("li");
  const podcastH1 = document.createElement("h1");
  podcastH1.innerHTML = podcast.name;
  podcastLi.appendChild(podcastH1);

  if (podcast.imageUrl) {
    const podcastImg = document.createElement("img");
    podcastImg.src = podcast.imageUrl;
    podcastLi.appendChild(podcastImg);
  }

  podcastsUl.appendChild(podcastLi);
});

document.body.appendChild(podcastsUl);
button.addEventListener("click", function () {
  if (body.style.backgroundColor === "black") {
    // Switch to light mode
    body.style.backgroundColor = "white";
    body.style.color = "black";
    button.innerText = "Dark Mode"; // Change button text
  } else {
    // Switch to dark mode
    body.style.backgroundColor = "black";
    body.style.color = "white";
    button.innerText = "Light Mode"; // Change button text
  }
});
