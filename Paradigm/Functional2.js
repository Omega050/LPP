function powerFunction(exponent) {
    return function(base) {
      return Math.pow(base, exponent);
    }
  }
  
  const square = powerFunction(2);
  const cube = powerFunction(3);
  
  console.log(square(4));  // Output: 16 (4^2)
  console.log(cube(3));    // Output: 27 (3^3)