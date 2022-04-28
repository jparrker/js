function getCount(str) {
  let vowelsCount = str.match(/[aeiou]/gi).length;
  return vowelsCount;
}

const vowels = ["a", "e", "i", "o", "u"];
function CountVowel(str) {
  let count = 0;

  for (let char of str) {
    if (vowels.includes(char)) {
      count++;
    }
  }
  return count;
}
