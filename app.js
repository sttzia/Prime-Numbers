function solve() {
  var p = parseFloat(getVal("p"));

  var startTime = performance.now(); // start the Timer

  var P = getPrimes(p);

  var Solution = getID("solution");
  Solution.innerText = P;

  var endTime = performance.now(); // stop the Timer
  var totalTime = endTime - startTime; // compute the elapsed time

  alert("Total time: " + totalTime + "_ms"); // display message
}
