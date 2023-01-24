function init() {
  const classes = {
    checkBox: "grng-commit-check",
  };

  document.querySelectorAll("." + classes.checkBox).forEach((checkBox) => {
    checkBox.parentElement.removeChild(checkBox);
  });

  const commitsListItem = document.querySelectorAll("li.js-commits-list-item");
  commitsListItem.forEach((commitsItem) => {
    let input = document.createElement("input");
    input.className = "grng-commit-check";
    input.type = "checkbox";
    commitsItem.insertBefore(input, commitsItem.children[0]);
  });
}

init();
