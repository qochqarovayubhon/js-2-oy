// // setItim malumot joylash
// localStorage.setItem("name", "John");
// localStorage.setItem("age", "30");

// // getItem malumotni olish
// const name = localStorage.getItem("name");
// const age = localStorage.getItem("age");
// console.log(name); // Output: John
// console.log(age);  // Output: 30

// // removeItem malumotni o'chirish
// localStorage.removeItem("age");
// console.log(localStorage.getItem("age")); // Output: null

let count = document.querySelector("p");
let son = 0;
function ayub() {
  son++;
  localStorage.setItem("son", son);
  count.textContent = localStorage.getItem("son");
}
count.textContent = localStorage.getItem("son");

function bitadanayirish() {
  son--;
  localStorage.setItem("son", son);
  count.textContent = localStorage.getItem("son");
}
function hammasiniOchirish() {
  son = 0;
  localStorage.setItem("son", son);
  count.textContent = localStorage.getItem("son");
}