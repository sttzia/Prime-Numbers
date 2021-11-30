function getID(i) {
  return document.getElementById(i);
}
function getVal(i) {
  return getID(i).value;
}

var submitButton = document.getElementById("submit");
submitButton.onclick = function () {
  solve();
};
