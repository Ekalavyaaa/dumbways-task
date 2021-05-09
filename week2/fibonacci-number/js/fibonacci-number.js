function printFibonacci(param) {
  //jika param lebih kecil atau sama dengan 0 maka tidak perlu mecetak apa apa
  if (param <= 0) {
    document.getElementById("hasil").innerHTML = "";
    return;
  }

  // jika param sama dengan 1 maka cetak bilangan fibonacci pertama saja

  if (param == 1) {
    document.getElementById("hasil").innerHTML = "0";
    return;
  }

  //jika param lebih besar atau sama dengan 2 maka

  let number1 = 0;
  let number2 = 1;
  let nextValue;
  var fibonacci = number1 + "," + number2;

  for (let i = 2; i < param; i++) {
    nextValue = number1 + number2;
    number1 = number2;
    number2 = nextValue;
    fibonacci += "," + nextValue;
  }

  document.getElementById("hasil").innerHTML = fibonacci;
}
