// Time: O(n) and Space: O(1) where n is the length of the smaller string

function oneAwayCompact(first, second) {
  if(Math.abs(first.length-second.length) > 1) return false;

  const biggerString = first.length > second.length ? first : second;
  const smallerString = first.length > second.length ? second : first;

  let biggerIdx = 0;
  let smallerIdx = 0;
  let foundDifference = false;

  while(biggerIdx < biggerString.length && smallerIdx < smallerString.length) {
    console.log(biggerString[biggerIdx], smallerString[smallerIdx]);
    if(biggerString[biggerIdx] !== smallerString[smallerIdx]) {
      if(foundDifference) return false;
      foundDifference = true;
      if(biggerString.length === smallerString.length) {
        smallerIdx++;
      }
    } else {
      smallerIdx++;
    }
    biggerIdx++;
  }

  return true;
}

console.log(oneAwayCompact('pale', 'ble'));
console.log(oneAwayCompact('pales', 'pale'));
