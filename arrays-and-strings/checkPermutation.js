// First approach is to sort both of the strings and check if they are equal or not.
// Time: O(nlogn) and Space: O(1)

function checkPermutationBySorting(str1, str2) {
  if(str1.length !== str2.length) return false;

  str1 = str1.split('').sort().join('');
  str2 = str2.split('').sort().join('');

  return str1 === str2;
}

console.log(checkPermutationBySorting('abc', 'bac'));
console.log(checkPermutationBySorting('abc', 'dac'));

// Second approach is to use a hashtable for the frequencies for the strings and match them.
// Time: 0(n) and Space: O(n); n being the length of the strings.
// Some might argue the space is O(1) because if it is an ASCII character then the hashtable will not be more than
// 128 length long.

function checkPermutationsWithHashTable(str1, str2) {
  if(str1.length !== str2.length) return false;
  const characterCounts = {};
  for(const char of str1) {
    if(!(char in characterCounts)) {
      characterCounts[char] = 1;
    } else {
      characterCounts[char]++;
    }
  }

  for(const char of str2) {
    if(!(char in characterCounts)) {
      return false;
    }
    if(characterCounts[char] <= 0) {
      return false;
    }
    characterCounts[char]--;
  }

  return true;
}

console.log(checkPermutationsWithHashTable('abc', 'bac'));
console.log(checkPermutationsWithHashTable('abc', 'dac'));
