function printFibonacci(param) {
  // membersihkan output
  document.getElementById("hasil").innerHTML = "";

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
  // set fibonacci untuk element 1 dan 2 berupa 0 dan 1
  var fibonacci = number1 + "," + number2;
  // looping sebanyak param
  for (let i = 2; i < param; i++) {

    // beri nilai variabel nextValue dengan number1 + number 2
    nextValue = number1 + number2;
    number1 = number2;
    number2 = nextValue;

    // tambahkan variabel fibonacci dengan nextValue
    fibonacci += "," + nextValue;
  }
  // tampilkan hasil di tampilan web
  document.getElementById("hasil").innerHTML = fibonacci;
}
