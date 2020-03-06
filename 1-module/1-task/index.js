/**
 * Factorial
 * @param {number} n
 * @returns {number}
 */
function factorial(n) {
  if (n < 0) {
    return console.log('Введите положительное число или 0');
  }

  let sum = 1;
  for (let i = n; i >= 1; i--) {
    sum *= i;
  }
  return sum;
}

factorial(5);
