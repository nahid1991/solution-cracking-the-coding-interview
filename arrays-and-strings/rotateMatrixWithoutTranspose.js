// Time: 0(n) and space: O(1)
function rotateMatrixWithoutTranspose(matrix) {
  const length = matrix.length;
  for(let layer = 0; layer < length/2 ; layer++) {
    const first = layer;
    const last = length - 1 - layer;
    for(let i = first; i < last ; i++) {
      const offset = i - first;
      const top = matrix[first][i];

      // left to top
      matrix[first][i] = matrix[last-offset][first];

      // bottom to left
      matrix[last-offset][first] = matrix[last][last-offset];

      // right to bottom
      matrix[last][last-offset] = matrix[i][last];

      matrix[i][last] = top;
    }
  }
}

/* TEST */
const matrix = [
  [1, 2, 3, 4],
  [0, 1, 2, 3],
  [0, 0, 1, 2],
  [1, 0, 0, 1]
];

console.log('before:');
console.log(matrix[0]);
console.log(matrix[1]);
console.log(matrix[2]);
console.log(matrix[3]);

rotateMatrixWithoutTranspose(matrix);

console.log('after:');
console.log(matrix[0]);
console.log(matrix[1]);
console.log(matrix[2]);
console.log(matrix[3]);
