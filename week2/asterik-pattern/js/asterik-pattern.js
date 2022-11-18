// asterik pettern
function menampilkanAsterik() {
  // bersihkan output
  

  // ambil value yang di inputan dengan id jumlah tampilan dan masukkan ke variabel jumlah
  var jumlah = document.getElementById("jumlahtampilan").value;

  // buat variabel asterik dan initial value string kosong
  var asterik = "";

  // looping sebanyak jumlah mulai dari 1
  for (var x = 1; x <= jumlah; x++) {
    //  looping sebanyak x mulai dari 1
    for (var y = 1; y <= x; y++) {
      // tambahkan karakter asterik ke variabel asterik
      asterik += "*";
    }
    // tambahkan line break / baris baru
    asterik += "<br>";
  }
  // tampilkan variabel asterik di output
  document.getElementById("Hasil").innerHTML = asterik;
}
