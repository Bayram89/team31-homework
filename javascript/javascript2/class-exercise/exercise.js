const favoriteDishes = ["Musakka", "Chicken", "Ash", "Pizza"];

const ul = document.createElement("ul");

favoriteDishes.forEach(function (item) {
  const li = document.createElement("li");
  li.innerText = item;
  ul.appendChild(li);
});
document.body.appendChild(ul);
