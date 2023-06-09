/**
 * Write a function called solution that
 *   takes in 2 parameters, a number and a function,
 *   runs the input function input number of times
 * @param {number} num
 * @param {function} fun
 * @returns null
 */

const solution = (num, fun, i = 0) => {
  if (i >= num || num <= 0) {
    return
  } fun()
  return solution(num, fun, i + 1)
}

module.exports = {
  solution
}
