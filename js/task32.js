// function includes(array, value) {
//   // Пиши код ниже этой строки
//   for (const item of array) {
//     // return 'false';
//     if (item === value) {
//       return 'true';
//     }
//   }


//   // Пиши код выше этой строки
// }
// console.log(includes([1, 2, 3, 4, 5], 3))

// function includes(array, value) {
//   // Пиши код ниже этой строки
//   for (const item of array) {
//     let message = false;
//     console.log(message);
//     if (item === value) {
//       message = true;
//       return message;
//     }
//   }


//   // Пиши код выше этой строки
// }
// console.log(includes([1, 2, 3, 4, 5], 8))

// function includes(array, value) {
//   // Пиши код ниже этой строки
//   let message = '';
// for (let item of array) {
//   message = 'false';
// if (item === value) {
// message = 'true';
//   break;
// }
//   return message;
// }
//   // Пиши код выше этой строки
// }


function includes(array, value) {
  // Пиши код ниже этой строки
for (let item of array) {
if (item === value) {
return true;
 }
 
}
  return false;
  // Пиши код выше этой строки
}
console.log(includes([1, 2, 3, 4, 5], 3))
