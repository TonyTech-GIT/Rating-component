const ratingContainer = document.querySelector(".rating-container");
const appreciationContainer = document.querySelector(".appreciation-container");
const numbers = document.querySelectorAll(".number");
const ratingNumber = document.querySelector("#rating-num");
const button = document.getElementById("btn");

numbers.forEach((number) => {
  number.addEventListener("click", (e) => {
    // console.log(e.target.innerText);
    let output = e.target.innerText;
    ratingNumber.innerText = output;
  });
});

button.addEventListener("click", () => {
  ratingContainer.classList.add("hidden");
  ratingContainer.classList.remove("visible");
  appreciationContainer.classList.add("visible");
  appreciationContainer.classList.remove("hidden");
});
// console.log("hello");
