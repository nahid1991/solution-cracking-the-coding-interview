// Time: O(n) and Space: O(1) where n is the length of the shorter string.

function oneAway(first, second) {
  if(first.length === second.length) {
    return oneEditReplace(first, second);
  } else if(first.length + 1 === second.length) {
    return oneEditInsert(first, second);
  } else if(first.length - 1 === second.length) {
    return oneEditInsert(second, first);
  }
  return false;
}

function oneEditReplace(str1, str2) {
  let foundDifference = false;
  for(let i = 0; i < str1.length; i++) {
    if(str1[i] !== str2[i]) {
      if(foundDifference) {
        return false;
      }
      foundDifference = true;
    }
  }
  return true;
}

function oneEditInsert(str1, str2) {
  let idx1 = 0;
  let idx2 = 0;
  while(idx1 < str1.length && idx2 < str2.length) {
    if(str1[idx1] !== str2[idx2]) {
      if(idx1 !== idx2) {
        return false;
      }

      idx2++
    } else {
      idx1++;
      idx2++;
    }
  }
  return true;
}

console.log(oneAway('pale', 'ple'));
console.log(oneAway('pale', 'ble'));
console.log(oneAway('pales', 'pale'));
console.log(oneAway('pales', 'bale'));


