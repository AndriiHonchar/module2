function findLongestWord(string) {
  // Пиши код ниже этой строки
  const message = string.split(' ');
   let longestWord = message[0];
  for (let word of message) {
 
    if (word.length > longestWord.length) {
  longestWord = word;
  }
  }
  return longestWord;
    // Пиши код выше этой строки
}