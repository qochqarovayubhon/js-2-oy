const input = document.getElementById("input");
const cards = document.getElementById("cards");

let data = JSON.parse(localStorage.getItem("cards")) || [];

function save() {
  localStorage.setItem("cards", JSON.stringify(data));

  cards.innerHTML = "";
  data.forEach((item, index) => {
    cards.innerHTML += `
      <div class="card">
        <p>${item}</p>
        <button onclick="deleteCard(${index})">Delete</button>
      </div>
    `;
  });
}

function addCard(){
  
}