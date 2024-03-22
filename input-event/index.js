document.addEventListener("DOMContentLoaded", () => {
  const inputMaxLengthOnLoad = document.getElementById("inputNama").maxLength;
  document.getElementById("sisaKarakter").innerText = inputMaxLengthOnLoad;

  // menangani inputNama ketika batas maksimal hampir habis
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

  // menangani inputNama ketika focus
  document.getElementById("inputNama").addEventListener("focus", function () {
    console.log("inputNama: focus");
    document.getElementById("notifikasiSisaKarakter").style.visibility =
      "visible";
  });

  document.getElementById("inputNama").addEventListener("blur", () => {
    document.getElementById("notifikasiSisaKarakter").style.visibility =
      "hidden";
  });

  document
    .getElementById("inputCaptcha")
    .addEventListener("change", function () {
      console.log("inputCaptcha: change");
      const inputCaptcha = document.getElementById("inputCaptcha").value;
      const submitButtonStatus = document.getElementById("submitButton");
      if (inputCaptcha === "PRNU") {
        submitButtonStatus.removeAttribute("disabled");
      } else {
        submitButtonStatus.setAttribute("disabled", "");
      }
    });

  // form ketika di submit dan menangani captcha
  document
    .getElementById("formDataDiri")
    .addEventListener("submit", function (event) {
      const inputCaptcha = document.getElementById("inputCaptcha").value;
      if (inputCaptcha === "PRNU") {
        alert("Selamat! Captcha Anda lolos :D");
      } else {
        alert("Captcha Anda belum tepat :(");
        document.getElementById("submitButton").setAttribute("disabled", "");
      }
      event.preventDefault();
    });

  // event onCopy
  document.getElementById("inputCopy").addEventListener("copy", function () {
    alert("Anda telah men-copy sesuatu...");
  });

  // event onPaste
  document.getElementById("inputPaste").addEventListener("paste", function () {
    alert("Anda telah mem-paste sebuah teks...");
  });
});
