function filterArray(numbers, value) {
  // Пиши код ниже этой строки
  const filteredNumbers = [];

  for (let number of numbers) {
    
    if (number > value) {
      filteredNumbers.push(number);
    }
  }

  return filteredNumbers;
  // Пиши код выше этой строки
}