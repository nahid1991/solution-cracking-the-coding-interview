function isUnique(str) {
  if(str.length > 128) return false;
  const seen = {};

  for(const char of str) {
    if(char in seen) return false;

    seen[char] = true;
  }

  return true;
}

// Time: O(n) but debatable. It can be O(1) since we will never have more than 128 characters to loop through.
// And also the space complexity has to be O(1) since we do not store more that 128 characters.
