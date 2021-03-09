
// You should implement your task here.

module.exports = function towelSort (matrix = []) {

    for (let i = 0; i < matrix.length; i++) {
        if ((i + 1) % 2 != 0) {
          continue;
        } else {
          matrix[i].reverse();
        }
      }
      
      let newMatrix = []
      for (i = 0; i < matrix.length; i++) {
        for (let j = 0; j < matrix[i].length; j++) {
          newMatrix.push(matrix[i][j]);
        }
      }
      return newMatrix;
}
