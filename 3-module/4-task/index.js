/**
 * @param   {{ name: string, age: number }[]} users
 * @returns {string[]}  объект
 */
function namify(users) {
  let result = [];
  for (let user of users) {
    console.log(user.name);
    result.push(user.name);
  }
  return (result);
}
