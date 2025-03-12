function insertImage(imageUrl, elementToAppendImageTo) {
  const img = document.createElement("img");
  img.src = imageUrl;
  elementToAppendImageTo.appendChild(img);
}
insertImage("https://picsum.photos/536/354", document.querySelector("body"));

function insertImage(imageUrl, elementToAppendImageTo) {
  const img = document.createElement("img");
  img.src = imageUrl;
  elementToAppendImageTo.appendChild(img);
}
addImage("https://picsum.photos/536/354", document.querySelector("body"));

const button = document.getElementById("myButton");
button.insertEventListener("click", function () {
  button.innerText = "You have now clicked on the button";
});
