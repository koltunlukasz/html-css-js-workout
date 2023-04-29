const box = document.querySelector(".box");
const colors = ["#16dbf9", "#def916", "#16f921", "#f916f1"];
let counter = 0;
box.style.backgroundColor = colors[3];
setInterval(() => {
  box.style.backgroundColor = colors[counter];
  counter++;
  counter === 4 ? (counter = 0) : null;
}, 3000);
