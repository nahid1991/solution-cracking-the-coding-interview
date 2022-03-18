function rotateMatrix(matrix) {
  transpose(matrix);
  for(let i = 0; i < matrix.length; i++) {
    let left = 0;
    let right = matrix[i].length-1;
    while(left < right) {
      const temp = matrix[i][left];
      matrix[i][left] = matrix[i][right];
      matrix[i][right] = temp;
      left++;
      right--;
    }
  }
}

function transpose(matrix) {
  for(let i = 0; i < matrix.length; i++) {
    for(let j = i; j < matrix.length; j++) {
      const temp = matrix[i][j];
      matrix[i][j] = matrix[j][i];
      matrix[j][i] = temp;
    }
  }
  console.log("transpose:");
  console.log(matrix[0]);
  console.log(matrix[1]);
  console.log(matrix[2]);
  console.log(matrix[3]);
}

/* TEST */
const testMatrix = [
  [1, 2, 3, 4],
  [0, 1, 2, 3],
  [0, 0, 1, 2],
  [1, 0, 0, 1]
];

console.log('before:');
console.log(testMatrix[0]);
console.log(testMatrix[1]);
console.log(testMatrix[2]);
console.log(testMatrix[3]);

rotateMatrix(testMatrix);

console.log('after:');
console.log(testMatrix[0]);
console.log(testMatrix[1]);
console.log(testMatrix[2]);
console.log(testMatrix[3]);
