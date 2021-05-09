function printVowels(param) {

  //jika param adalah kosong maka cetak kosong dan kembali
  if (param == "") {
    document.getElementById("hasil").innerHTML = "";
    return;
  }

  //ini adalah daftar vokal
  var vokal = "aiueo";

   //check param apakah termasuk vokal
  var isVokal = vokal.includes(param);

  //ini adalah daftar konsonan
  var konsonan = "bcdfghjklmnpqrstvwzyz";

  //check param apakah termasuk konsonan
  var isKonsonan = konsonan.includes(param);

  //nilai awal text
  var text = "";

  if (isVokal == true) {
    text = param + " adalah vokal ";
  } else if (isKonsonan == true) {
    text = param + " adalah konsonan ";
  } else {
    text = param + " bukan vokal dan bukan konsonan";
  }

  document.getElementById("hasil").innerHTML = text;
}
