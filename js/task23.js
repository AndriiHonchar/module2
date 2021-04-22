function filterArray(numbers, value) {
  // Пиши код ниже этой строки
const array = [];
for (let number of numbers) {
if (number>value){
array.push(number);
}
}
 return array;
  // Пиши код выше этой строки
}