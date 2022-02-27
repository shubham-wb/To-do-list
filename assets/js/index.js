// This script changes the background color category wise tasks

var temp = document.querySelectorAll("#task-category");

for (key of temp) {
  var category = key.innerText;
  var color;
  switch (category) {
    case "PERSONAL":
      color = "blue";
      break;
    case "WORK":
      color = "green";
      break;
    case "SCHOOL":
      color = "yellow";
      break;
    case "HOBBY":
      color = "pink";
      break;
    case "OTHER":
      color = "purple";
      break;
  }

  key.style.backgroundColor = color;
}
