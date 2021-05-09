function tampilkanSegitigaPascal(rows) {
    
  // bersihkan tampilan web
  document.getElementById("keluaran").innerHTML = "";

  // panggil function buatPascal dan masukkan nilainya ke variabel arr
  var arrPascal = buatPascal(+rows);

  //   looping sebanyak panjang arrPascal
  for (var i = 0; i < arrPascal.length; i++) {
    // membuat element div baru
    var div = document.createElement("div");

    // lopping sebanyak panjang arrPascal[i]
    for (var j = 0; j < arrPascal[i].length; j++) {
      // membuat element span
      var span = document.createElement("span");

      //   masukkan arrPascal[i][j] ke span
      span.innerHTML = arrPascal[i][j];

      //   tambahkan span ke div
      div.appendChild(span);
    }

    // tambahkan div ke keluaran
    document.getElementById("keluaran").appendChild(div);
  }
}

// membuat array pascal
function buatPascal(n) {
  // buat array kosong
  var arr = [];
  // buat variabel tmp
  var tmp;

  // looping sebanyak n mulai dari 0
  for (var i = 0; i < n; i++) {
    // initialize arr [i] dengan array kosong
    arr[i] = [];

    // looping sebanyak i mulai dari 0
    for (var j = 0; j <= i; j++) {
      // jika j sama dengan i maka masukkan angka 1 ke arr[i]
      if (j == i) {
        arr[i].push(1);

        // jika i tidak sama dengan j maka masukkan tmp ke arr[i]
      } else {
        tmp =
          (!!arr[i - 1][j - 1] ? arr[i - 1][j - 1] : 0) +
          (!!arr[i - 1][j] ? arr[i - 1][j] : 0);
        arr[i].push(tmp);
      }
    }
  }
  return arr;
}
