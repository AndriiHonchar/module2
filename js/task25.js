function getCommonElements(array1, array2) {
  // Пиши код ниже этой строки
const array3 = [];
for (let number of array1) {
if (array2.includes(number)){
array3.push(number);
}
}
  return array3;
  // Пиши код выше этой строки
}