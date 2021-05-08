// asterik pettern
function menampilkanAsterik() {
    var jumlah = document.getElementById("jumlahtampilan").value;
  
    var asterik = "";
  
    for (var x = 1; x <= jumlah; x++) {
       
      for (var y = 1; y <= x; y++) {
        asterik += "*";
      }
  
      asterik += "<br>";
  
    }
  
    document.getElementById("Hasil").innerHTML = asterik;
  }
  