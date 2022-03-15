// Time: O(n) and Space: O(n) where n is the length of the string.

function urlify(str, trueLength) {
  str = str.split('');
  let numberOfSpaces = 0;
  let lastStringIdx = trueLength-1;
  let idx = str.length-1;
  for(let i = 0; i < trueLength; i++) {
    if(str[i] === ' ') {
      numberOfSpaces++;
    }
  }
  if(numberOfSpaces === 0) return str;
  while(idx >= 0) {
    if(numberOfSpaces === 0) break;
    if(str[lastStringIdx] === ' ') {
      str[idx] = '0';
      str[idx-1] = '2';
      str[idx-2] = '%';
      idx -= 3;
    } else {
      str[idx] = str[lastStringIdx];
      idx--;
    }
    lastStringIdx--;
  }
  return str.join('');
}

console.log(urlify('My name is Nahid      ', 16));
console.log(urlify('My name is not important!        ', 25));
