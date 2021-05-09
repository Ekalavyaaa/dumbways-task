function printRemoves() {
  // bersihkan tampilan web
  document.getElementById("tampilan").innerHTML = "";
  // ambil array yang di input di inputan 1
  var temp1 = document.getElementById("array1").value;
  temp1 = temp1.replaceAll("[", "");
  temp1 = temp1.replaceAll("]", "");

  // hapus semua tanda petik 1
  temp1 = temp1.replaceAll("'", "");

  // hapus semua tanda petik 2
  temp1 = temp1.replaceAll('"', "");

  //  ubah string menjadi array
  var arr = temp1.split(",");

  // ambil karakter yang ada di inputan 2
  var yangDihapus = document.getElementById("input2").value;
  

  // looping untuk semua elemen arr
  for (var i = 0; i < arr.length; i++) {
    //   jika elemen array sama dengan yang dihapus maka hapus element array tersebut dengan perintah splice
    if (arr[i] === yangDihapus) {
      arr.splice(i, 1);
    }
  }
  // tampilkan array ke tampilan web
  document.getElementById("tampilan").innerHTML = arr;
}
