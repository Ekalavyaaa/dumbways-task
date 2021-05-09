function printPrime() {
  //ambil nilai yang ada di kotak number 1 dan masukkan ke variabel x
  var bilangan1 = document.getElementById("number1").value;

  // ambil nilai yang ada di kotak number 2 dan masukkan ke variabel y
  var bilangan2 = document.getElementById("number2").value;

  var text1 = "";
  var text2 = "";
  for (var i = bilangan1; i <= bilangan2; i++) {
    let flag = 0;

    //kalau habis dibagi 2 maka bukan bilangan prima
    for (let j = 2; j < i; j++) {
      if (i % j == 0) {
        flag = 1;
        break;
      }
    }

    // jika bilangan lebih besar dari 1 dan flag sama dengan 0 maka termasuk bilangan prima
    if (i > 1 && flag == 0) {
      //masukkan ke daftar bilangan prima
      text1 += i + ",";
    }

    // jika text berakhir dengan koma
    if (text1.endsWith(",")) {
      // maka hilangkan koma dibelakang
      text2 = text1.substring(0, text1.length - 1);
    }
  }

  document.getElementById("hasil").innerHTML = text2;
}
