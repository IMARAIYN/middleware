// index.js

const express = require('express');
const app = express();

// Middleware untuk mencetak pesan setiap kali ada permintaan
const logMiddleware = (req, res, next) => {
  console.log(`[${new Date().toISOString()}] ${req.method} ${req.url}`);
  next();
};

// Gunakan middleware di seluruh aplikasi
app.use(logMiddleware);

// Penanganan permintaan utama
app.get('/', (req, res) => {
  res.send('SELAMAT DATANG DI PROJEK MIDDLEWARE IRMA NURMALASARI');
 








});

// Menjalankan server
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
