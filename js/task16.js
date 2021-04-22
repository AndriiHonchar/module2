function makeArray(firstArray, secondArray, maxLength) {
    // Пиши код ниже этой строки
let array = '';
array = firstArray.concat(secondArray);
array = array.slice(0,maxLength);  
    return array;
    // Пиши код выше этой строки
  }