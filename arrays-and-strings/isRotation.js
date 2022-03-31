// Time: O(N) where N is the length of the strings and Space: O(1)
function isRotation(stringOne, stringTwo) {
  if(stringOne.length !== stringTwo.length) return false;
  const newString = stringOne + stringOne;
  for(let i = 0; i < newString.length-stringTwo.length; i++) {
    const newSubstring = newString.substring(i, i+stringTwo.length);
    if(newSubstring === stringTwo) {
      return true;
    }
  }
  return false;
}

console.log(isRotation('erbottlewat', 'waterbottle'));
console.log(isRotation('erbottlewat', 'waterbottl'));
console.log(isRotation('erbottlewat', 'waterbottler'));
