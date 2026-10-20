
// Mengambil tombol dengan ID "sapa" dari HTML.
const tombolSapa = document.getElementById('sapa');

// Memastikan tombol tersedia sebelum menambahkan fungsi.
if (tombolSapa) {
  tombolSapa.addEventListener('click', function () {
    alert('Hallo! Terima kasih telah berkunjung.');
  });
}
