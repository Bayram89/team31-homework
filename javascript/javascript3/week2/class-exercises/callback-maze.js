console.log("Setting up Room 1");
document.getElementById("start").addEventListener("click", function () {
  setTimeout(function () {
    document.getElementById("output").innerText = "Entered Room 1";

    console.log("Setting up Room 2");
    setTimeout(function () {
      document.getElementById("output").innerText = "Found a key in Room 2";

      console.log("Setting up Room 3");
      document.getElementById("start").addEventListener(
        "click",
        function () {
          setTimeout(function () {
            document.getElementById("output").innerText = "Unlocked Room 3";

            console.log("Setting up Room 4");
            setTimeout(function () {
              document.getElementById("output").innerText =
                "Press any key to escape!";

              document.addEventListener(
                "keydown",
                function () {
                  document.getElementById("output").innerText =
                    "Escaped the room!";
                },
                { once: true }
              );
            }, 1000);
          }, 2000);
        },
        { once: true }
      );
    }, 1500);
  }, 1000);
});
