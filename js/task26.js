function calculateTotalPrice(order) {
  let total = 0;
  // Пиши код ниже этой строки

  for (let number of order) {
    total += number;
  }

  // Пиши код выше этой строки
  return total;
}