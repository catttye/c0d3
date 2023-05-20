/**
 * Write a function called solution that
 *   takes in 2 parameters, a number n and string,
 *   and returns the string repeated n number of times
 * @param {number} num
 * @param {string} str
 * @returns {string}
 */

const solution = (num, str, result = '', i = 0) => {
  if (i === num || num < 0) {
    return result
  } result += str
  return solution(num, str, result, i + 1)
}

module.exports = {
  solution
}
