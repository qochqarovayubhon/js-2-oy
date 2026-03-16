// /////////////////// diskirac tor /////////////////////

// let [olma, nok, ...anor] = ["olma", "nok", "anor"];
// console.log(anor); // ["anor"]

// let [olma, nok, ...anor] = [
//   {
//     id: 1,
//     name: "olma",
//   },
//   {
//     id: 2,
//     name: "onor",
//   },
//   {
//     id: 3,
//     name: "olma",
//   },
//   {
//     id: 4,
//     name: "olma",
//   },
//   {
//     id: 5,
//     name: "olma",
//   },
//   {
//     id: 6,
//     name: "olma",
//   },
// ];

// console.log(anor); // [{id: 3, name: "olma"}, {id: 4, name: "olma"}, {id: 5, name: "olma"}, {id: 6, name: "olma"}]

let { nok, ...piola } = {
  nok: {
    id: 1,
    name: "olma",
  },
  piola: {
    id: 2,
    name: "onor",
  },
  olma: {
    id: 3,
    name: "olma",
  },
  behi: {
    id: 4,
    name: "olma",
  },
  osh: {
    id: 5,
    name: "olma",
  },
};
console.log(piola); // {piola: {id: 2, name: "onor"}, olma: {id: 3, name: "olma"}, behi: {id: 4, name: "olma"}, osh: {id: 5, name: "olma"}}

