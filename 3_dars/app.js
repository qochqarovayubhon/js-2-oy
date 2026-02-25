// ////////////////////////////////////////////// arry //////////
let arr = [1, 2, 3, 4, 5];
// console.log(arr[]);
// Array.forEach() - bu metod massiv elementlarini birma-bir qayta ishlash imkonini beradi. Bu metod har bir element uchun berilgan funksiyani chaqiradi va unga elementning qiymatini, indeksini va butun massivni argument sifatida uzatadi. Array.forEach() metodi hech qanday qiymat qaytarmaydi, shuning uchun uni zanjirli chaqiriqlarda ishlatish mumkin emas.
arr.forEach((element, index, array) => {
  console.log(element, index, array);
});
