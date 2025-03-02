<?php
// Tangkap data dari form HTML
$nama = $_POST['nama'];
$no_tlp = $_POST['no_tlp'];
$email = $_POST['email'];
$pertanyaan = $_POST['pertanyaan'];

// Validasi sederhana
if (!empty($nama) && !empty($no_tlp) && !empty($email) && !empty($pertanyaan)) {
  // Koneksi ke database
  $conn = new mysqli('localhost', 'root', '', 'wanasari_db');

  // Periksa koneksi
  if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
  }

  // Gunakan prepared statement untuk menyimpan data
  $stmt = $conn->prepare("INSERT INTO user_massage (nama, no_tlp, email, pertanyaan) VALUES (?, ?, ?, ?)");
  $stmt->bind_param("ssss", $nama, $no_tlp, $email, $pertanyaan);

  // Eksekusi query dan cek hasil
  if ($stmt->execute()) {
    echo "<script>alert('Data Anda Berhasil dikirim, Mohon Tunggu Balasan dari Kami.');window.location = '../contactUs.html'</script>";
  } else {
    echo "Error: " . $stmt->error;
  }

  // Tutup statement dan koneksi
  $stmt->close();
  $conn->close();
} else {
  echo "All fields are required!";
}
