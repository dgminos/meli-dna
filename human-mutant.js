// Function that checks if there are 4 consecutive letters in a given direction
function checkDirection(dna, x, y, dx, dy) {
    const rows = dna.length;
    const cols = dna[0].length; // Number of columns in the first row
    const letter = dna[x][y];
    
    if (!letter) return false; // Ignore if cell is null or undefined
  
    // check the following 3 positions at the specified direction
    for (let i = 1; i < 4; i++) {
      const newX = x + i * dx;
      const newY = y + i * dy;
  
      // Check if we are out of limits or if the letter does not match
      if (
        newX < 0 || newX >= rows || // Check row limits
        newY < 0 || newY >= cols || // Check columns limits
        dna[newX][newY] !== letter
      ) {
        return false;
      }
    }
    return true;
  }
  
  // Function that loops through the array and checks if there are 4 consecutive letters in any direction
  function isMutant(dna) {
    const rows = dna.length;
    if (rows === 0) return false; // If the array is empty, return false
  
    const cols = dna[0].length; // Number of columns in the first row
  
    // Loop through each cell of the matrix
    for (let i = 0; i < rows; i++) {
      for (let j = 0; j < cols; j++) {
        // check the 4 possible directions
        if (
          checkDirection(dna, i, j, 0, 1) || // Right horizontal
          checkDirection(dna, i, j, 1, 0) || // Vertical down
          checkDirection(dna, i, j, 1, 1) || // Diagonal right-down
          checkDirection(dna, i, j, 1, -1)   // Diagonal left-down
        ) {
          return true; // If a sequence is found, return true
        }
      }
    }
  
    return false; // If no sequence is found, returns false
  }

  const dna = [
    ['A', 'T', 'G', 'C', 'G', 'A'],
    ['C', 'A', 'G', 'T', 'G', 'C'],
    ['T', 'T', 'A', 'T', 'G', 'T'],
    ['A', 'G', 'A', 'A', 'G', 'G'],
    ['C', 'C', 'C', 'C', 'T', 'A'],
    ['T', 'C', 'A', 'C', 'T', 'G']
  ];
  
  
  const dna2 = [
    ['A', 'T', 'G', 'C', 'G', 'A'],
    ['C', 'A', 'G', 'T', 'G', 'C'],
    ['T', 'T', 'A', 'T', 'T', 'T'],
    ['A', 'G', 'A', 'C', 'G', 'G'],
    ['G', 'C', 'G', 'T', 'C', 'A'],
    ['T', 'C', 'A', 'C', 'T', 'G']
  ];
  
  // Example of use with a non-square matrix
  const dna3 = [
    ['A', 'B', 'C', 'D', 'E'],
    ['A', 'A', 'A', 'A', 'C'],
    ['B', 'C', 'D', 'B', 'A'],
    ['C', 'D', 'A', 'B', 'C'],
    ['A', 'B', 'C', 'D'],
    ['B', 'A', 'C', 'D']
  ];

  console.log(isMutant(dna));
  console.log(isMutant(dna2));
  console.log(isMutant(dna3)); // → true