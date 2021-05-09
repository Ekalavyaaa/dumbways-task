function printMultiplication(param) {
// berishkan uotput
  document.getElementById("hasil").innerHTML ="";
  // membuat variabel text dan beri nilai kosong
  var text = "";

  // looping sebanyak 10 kali
  for (let index = 1; index <= 10; index++) {
    // menyusun text sesuai dengan yang di minta yaitu param dikali index  dan hasil perkaliannya
    text += param + " * " + index + " = " + param * index + "<br>";
  }
  // tampilkan text di tampilan web
  document.getElementById("hasil").innerHTML = text;
}
