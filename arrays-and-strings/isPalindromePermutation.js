// Time: O(n) and Space: O(c) where n is the number of characters in the string and c is the number of unique characters
// of the string.

function isPalindromePermutation(string) {
  const characterCounts = {};
  let oddCount = 0;
  for(let i = 0; i < string.length; i++) {
    if(string[i] === ' ') continue;
    if(!(string[i].toLowerCase() in characterCounts)) {
      characterCounts[string[i].toLowerCase()] = 1;
    } else {
      characterCounts[string[i].toLowerCase()]++;
    }

    if(characterCounts[string[i].toLowerCase()] % 2 === 1) {
      oddCount++;
    } else {
      oddCount--;
    }
  }

  return oddCount <= 1;
}

console.log(isPalindromePermutation('Taco cat'));
console.log(isPalindromePermutation('Taco cato'));
console.log(isPalindromePermutation('Taco cata'));

