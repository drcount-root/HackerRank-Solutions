function gradingStudents(grades) {
  // Used map high order array method to single out each element in array
  return grades.map(n => {
    // find the difference after division with 5
    let diff = 5 - (n % 5);
    // make our test cases and add the diff if condition is true
    if (diff < 3 && n >= 38) {
      n += diff;
    }
    return n;
  });
}
let gRades = [4, 73, 67, 38, 33];
console.log(gradingStudents(gRades)); // Outputs:  [4,75,67,40,33]
