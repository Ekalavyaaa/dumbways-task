function ConcatArray() {
  // bersihkan output
  document.getElementById("output").innerHTML = "";

  // ambil array pada input1 dan masukkan ke variabel temp1
  var temp1 = document.getElementById("input1").value;
  //   menghapus siku kiri
  temp1 = temp1.replace("[", "");
  //   menghapus siku kanan
  temp1 = temp1.replace("]", "");

  //   ambil nilai inputan 2 dan masukkan ke variabel temp2
  var temp2 = document.getElementById("input2").value;

  // menghapus siku kiri
  temp2 = temp2.replace("[", "");
  //   menghapus siku kanan
  temp2 = temp2.replace("]", "");

  // mengubah string temp1 menjadi array dan masukkab ke variabel input1 dengan function split
  var input1 = temp1.split(",");
  //   mengubah string temp2 menjadi array dan masukkan ke variabel input2 dengan function split
  var input2 = temp2.split(",");
  // menggabungkan array input1 dan array input2 dan masukkan ke variabel newArray
  var newArray = input1.concat(input2);

  // membuat variabel uniqueArr
  var uniqueArr = [];
  // looping sebanyak panjang array newArray
  for (var i = 0; i < newArray.length; i++) {
    //   check jika uniqueArray tidak berisi newArray index i
    if (!uniqueArr.includes(newArray[i])) {
      // masukkan newArray index i ke uniqueArr dengan function push
      uniqueArr.push(newArray[i]);
    }
  }

  // urutkan uniqueArr dan masukkan ke sortedArr
  var sortedArr = uniqueArr.sort();
  
  //   tampilkan sortedArr ke halaman web
  document.getElementById("output").innerHTML = sortedArr;
}
