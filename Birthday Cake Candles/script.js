const arr = [4, 2, 6, 1, 4, 3, 6, 5, 4];

const finder = (a) => {
  const maxLength = Math.max(...a);
  let counter = 0;
  for (let i = 0; i < a.length; i++) {
    if (maxLength === a[i]) counter++;
  }
  return counter;
};

console.log(`\nThe lengthy candles are ${finder(arr)} in numbers`);

//NOTE  To Submit

// function birthdayCakeCandles(candles) {
//     var maxHeight = Math.max(...candles);
//     var maxHeightCount = 0;
//     for(var i = 0; i < candles.length; i++){
//         if (candles[i] == maxHeight){
//             maxHeightCount = maxHeightCount + 1;
//         }
//     }
//     return maxHeightCount;
// }
