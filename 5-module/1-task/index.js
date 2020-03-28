/**
 * Метод устанавливает необходимые по условию аттрибуты таблице
 * @param {Element} table
 */
function highlight(table) {
  const status = table.querySelectorAll("tr > td:last-child");
  const gender = table.querySelectorAll("tr > td:nth-child(3)");
  const age = table.querySelectorAll("tr > td:nth-child(2)");

  status.forEach(item => {
    if (item.dataset.available === "true") {
      item.parentElement.classList.add('available');
    }

    if (item.dataset.available === "false") {
      item.parentElement.classList.add('unavailable');
    }

    if (!item.dataset.available) {
      item.parentElement.setAttribute("hidden", true);
    }
  });

  gender.forEach(item => {
    if (item.textContent === 'm') {
      item.parentElement.classList.add('male');
    }

    if (item.textContent === 'f') {
      item.parentElement.classList.add('female');
    }
  });

  age.forEach(item => {
    if (item.textContent < 18) {
      item.parentElement.style.textDecoration = "line-through";
    }
  });
}
