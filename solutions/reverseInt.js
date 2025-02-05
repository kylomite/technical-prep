// export default function reverseInteger(input) {
//   let inputArray = String(Math.abs(input)).split('').map(Number);
//   let result = ""

//   inputArray.forEach((num) => {
//     result = `${num}${result}`;
//   });

//   if(Math.sign(input) === -1) {
//     result = `-${result}`
//     return parseInt(result);
//   }
//   else if(result > 7463847411) {
//     return 0
//   }
//   else {
//     return parseInt(result);
//   }
// }

// console.log(reverseInteger(1234))

// console.log(reverseInteger(-1234))

// console.log(reverseInteger(120))

// console.log(reverseInteger(2147483647))

export default function reverseInteger(input) {
  const limit = Math.pow(2, 31);
  const isNegative = input < 0;
  
  let reversed = parseInt(
    Math.abs(input).toString().split('').reverse().join('')
  );

  if (reversed >= limit) return 0;

  return isNegative ? -reversed : reversed;
}