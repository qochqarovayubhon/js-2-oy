let praductis = [
  {
    id: 1,
    img: "./img/img.png",
    title: "Apple iPhone 14 Pro Max 128GB Deep Purple",
    price: 12000000,
  },
  {
    id: 2,
    img: "./img/img.png",
    title: "Blackmagic Pocket Cinema Camera 6k Pro",
    price: 15000000,
  },
  {
    id: 3,
    img: "./img/img.png",
    title: "Apple Watch Series 9 GPS 41mm Starlight Aluminium  ",
    price: 18000000,
  },
  {
    id: 4,
    img: "./img/img.png",
    title: "AirPods Max Silver Starlight Aluminium  ",
    price: 20000000,
  },
  {
    id: 5,
    img: "./img/img.png",
    title: "Samsung Galaxy Watch6 Classic 47mm Black ",
    price: 22000000,
  },
  {
    id: 6,
    img: "./img/img.png",
    title: "Galaxy Z Fold5 Unlocked | 256GB | Phantom Black ",
    price: 25000000,
  },
  {
    id: 7,
    img: "./img/img.png",
    title: 'Apple iPad 9 10.2" 64GB Wi-Fi Silver (MK2L3) 2021',
    price: 28000000,
  },
  {
    id: 8,
    img: "./img/img.png", 
    title: 'Apple iPad Pro 12.9" 128GB Wi-Fi Silver (MK183) 2021',
    price: 30000000,
  },
];
const cards = document.querySelector(".cards");
praductis.forEach((itim) => {
  let card = document.createElement("div");
  card.classList.add("cards_card");
  cards.appendChild(card);
  card.innerHTML = `
    <img src="${itim.img}" alt="${itim.title}">
    <h3>${itim.title}</h3>
    <p>${itim.price.toLocaleString()} UZS</p>
      <button class="btn">Buy Now</button>
    </div>
  `;
});
const modal = document.querySelector(".modal");
function modalAdd() {
  modal.classList.add("modal_open");
}
function savatQoshish() {
  let products2 = praductis.find((item) => item.id === 1);
  let savat = JSON.parse(localStorage.getItem("savat")) || [];
  savat.push(products2);
  localStorage.setItem("savat", JSON.stringify(savat));
}