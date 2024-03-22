document.addEventListener("DOMContentLoaded", () => {
  const inputMaxLengthOnLoad = document.getElementById("inputNama").maxLength;
  document.getElementById("sisaKarakter").innerText = inputMaxLengthOnLoad;

  document.getElementById("inputNama").addEventListener("input", () => {
    const jumlahKarakterDiketik =
      document.getElementById("inputNama").value.length;
    const jumlahKarakterMaksimal =
      document.getElementById("inputNama").maxLength;

    const sisaKarakter = jumlahKarakterMaksimal - jumlahKarakterDiketik;

    document.getElementById("sisaKarakter").innerText = sisaKarakter;

    if (sisaKarakter === 0) {
      document.getElementById("sisaKarakter").innerText =
        "Batas maksimal tercapai";
    } else if (sisaKarakter <= 5) {
      document.getElementById("notifikasiSisaKarakter").style.color = "red";
    } else {
      document.getElementById("notifikasiSisaKarakter").style.color = "black";
    }
  });

  document.getElementById("inputNama").addEventListener("focus", function () {
    console.log("inputNama: focus");
    document.getElementById("notifikasiSisaKarakter").style.visibility =
      "visible";
  });

  document.getElementById("inputNama").addEventListener("blur", () => {
    document.getElementById("notifikasiSisaKarakter").style.visibility =
      "hidden";
  });
});