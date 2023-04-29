//get the element
const box = document.querySelector(".box");
//array of colors for changing in the element
const colors = ["#16dbf9", "#def916", "#16f921", "#f916f1"];

let counter = 0;
//start with the last element from array to avoid duplicate in one sentence
box.style.backgroundColor = colors[3];
setInterval(() => {
  box.style.backgroundColor = colors[counter];
  counter++;
  // a condition to not get the counter go to count higher than array of colors length
  counter === 4 ? (counter = 0) : null;
}, 3000);
