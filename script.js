//your JS code here. If required.
let squares = document.querySelectorAll(".square");

squares.forEach((sq) => {
  sq.addEventListener("mouseover", () => {
    squares.forEach((otherSq) => {
      if (otherSq !== sq) {
        otherSq.style.backgroundColor = "#6F4E37"; // Coffee
      }
    });
  });

  sq.addEventListener("mouseout", () => {
    squares.forEach((otherSq) => {
      otherSq.style.backgroundColor = "#E6E6FA"; // Lavender
    });
  });
});
