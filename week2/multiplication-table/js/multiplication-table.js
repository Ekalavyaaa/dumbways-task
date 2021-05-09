function printMultiplication(param) {
  var text = "";
  for (let index = 1; index <= 10; index++) {
    text += param + " * " + index + " = " + param * index + "<br>";
  }

  document.getElementById("hasil").innerHTML = text;
}
