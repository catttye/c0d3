/**
 * Write a function called solution that
 * Takes in 3 numbers, return the largest
 * @param {number} num1
 * @param {number} num2
 * @param {number} num3
 * @returns {number}
 */

const solution = (num1, num2, num3) => {
  let largest = num1;

  if (num2 > largest) {
    largest = num2;
  }

  if (num3 > largest) {
    largest = num3;
  }

  return largest;
}

module.exports = {
  solution
}
