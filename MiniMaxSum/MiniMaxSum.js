// For Own
// const miniMaxSum = (arr) => {
//   let sum = arr.reduce((a, b) => a + b);
//   let maxValue = Math.max(...arr);
//   let minValue = Math.min(...arr);
//   return `${sum - maxValue} ${sum - minValue}`;
// };

//NOTE For Submission
function miniMaxSum(arr) {
  let sum = arr.reduce((a, b) => {
    return a + b;
  });
  const min = sum - Math.max(...arr);
  const max = sum - Math.min(...arr);
  console.log(min + " " + max);
}

const arr = [5, -4, 0, 2, 3];
console.log(miniMaxSum(arr));
