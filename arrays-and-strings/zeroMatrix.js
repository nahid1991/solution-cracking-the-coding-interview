// Time: O(mn) and Space: O(1), where m is the length of the column and n is the length of the row.
function zeroMatrix(matrix) {
  let [rowHasZero, colHasZero] = checkFirstRowAndColumnForZero(matrix);

  for(let i = 1; i < matrix.length; i++) {
    for(let j = 1; j < matrix[i].length; j++) {
      if(matrix[i][j] === 0) {
        matrix[0][j] = 0;
        matrix[i][0] = 0;
      }
    }
  }

  zerofyRowsAndColumns(matrix, rowHasZero, colHasZero);

  return matrix;
}

function zerofyCol(col, matrix) {
  for(let i = 0; i < matrix.length; i++) {
    matrix[i][col] = 0;
  }
}

function zerofyRow(row, matrix) {
  for(let i = 0; i < matrix[row].length; i++) {
    matrix[row][i] = 0;
  }
}

function checkFirstRowAndColumnForZero(matrix) {
  const rowAndColHasZero = [false, false];
  for(let i = 0; i < matrix[0].length; i++) {
    if(matrix[0][i] === 0) {
      rowAndColHasZero[0] = true;
      break;
    }
  }

  for(let i = 0; i < matrix.length; i++) {
    if(matrix[i][0] === 0) {
      rowAndColHasZero[1] = true;
      break;
    }
  }

  return rowAndColHasZero;
}

function zerofyRowsAndColumns(matrix, rowHasZero, colHasZero) {
  for(let i = 1; i < matrix[0].length; i++) {
    if(matrix[0][i] === 0) {
      zerofyCol(i, matrix);
    }
  }

  for(let i = 1; i < matrix.length; i++) {
    if(matrix[i][0] === 0) {
      zerofyRow(i, matrix);
    }
  }

  if(rowHasZero) {
    zerofyRow(0, matrix);
  }

  if(colHasZero) {
    zerofyCol(0, matrix);
  }
}

const input = [
  [1,  2,  3,  4,  5],
  [6,  7,  8,  0,  10],
  [11, 0,  13, 14, 15],
  [16, 17, 18, 19, 20],
  [21, 22, 23, 24, 25]
];
console.log(input);
console.log(zeroMatrix(input));
