/**
 * Складываем зарплаты
 * @param {Object} salaries - объект зарплат
 * @returns {Number}
 */

function sumSalary(salaries) {
  let sum = 0;
  for (let i in salaries) {
    if (typeof salaries[i] === "number") {
      sum += salaries[i];
    }
  }
  return sum;
}
