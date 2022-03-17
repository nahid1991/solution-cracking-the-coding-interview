// Time: O(n) and Space: O(1) where n is the length of the input string

function stringCompress(string) {
  let result = '';
  let currentCount = 1;
  for(let i = 0; i < string.length; i++) {
    if(i < string.length - 1) {
      if(string[i] !== string[i+1]) {
        result += string[i];
        result += currentCount.toString();
        currentCount = 1;
      } else {
        currentCount++;
      }
    } else if(i === string.length - 1) {
      if(string[i] !== string[i-1]) {
        currentCount = 1;
      }
      result += string[i] + currentCount.toString();
    }
  }
  return result.length < string.length ? result : string;
}

console.log('aaaaaa', stringCompress('aaaaaa'), 'a6');
console.log('aabcccccaaa', stringCompress('aabcccccaaa'), 'a2b1c5a3');
console.log('abcd', stringCompress('abcd'), 'abcd');
