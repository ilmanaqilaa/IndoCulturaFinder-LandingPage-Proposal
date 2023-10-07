// Mendapatkan referensi elemen-elemen yang diperlukan dengan menggunakan id
const myTextElement = document.getElementById("myText");
const colorButton = document.getElementById("colorButton");

// Daftar warna yang figunakan
const colors = ["red", "blue", "green", "purple", "orange"];

// Fungsi untuk mengubah warna teks secara acak
function changeColor() {
  const randomColor = colors[Math.floor(Math.random() * colors.length)];
  myTextElement.style.color = randomColor;
}

// Menambahkan event listener untuk tombol
colorButton.addEventListener("click", changeColor);
