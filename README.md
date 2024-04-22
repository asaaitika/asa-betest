# ms-asa-betest

Ini adalah project terkait BE test dengan menggunakan node.js - express.js - mongodb - redis

## Persyaratan

- Node.js
- Mongodb server (local)
- Redis server (local)

## Cara Menjalankan Proyek

Ikuti langkah-langkah berikut untuk menjalankan proyek secara lokal:

### 1. Kloning Repositori

Klon repositori ke sistem lokal menggunakan:

> git clone url_repositori
> cd nama_folder_proyek

### 2. Instalasi Dependensi

Instal semua dependensi yang diperlukan menggunakan npm: 

> npm install

### 3. Konfigurasi Redis

Pastikan server Redis berjalan. Jika menggunakan konfigurasi default, tidak perlu mengubah apa pun. Jika tidak, sesuaikan file `config/redisClient.js` dengan konfigurasi Redis.

### 4. Konfigurasi Mongodb

Pastikan server Mongodb berjalan

### 5. Menjalankan Server

Jalankan server aplikasi menggunakan: 

> npm run dev

Server sekarang harus berjalan di `http://localhost:3000` (atau port yang tentukan).

## Mengirim Request
Mengirim request ke server menggunakan alat seperti Postman atau cURL. Berikut adalah contoh cara mengirim request:

### Create User
POST /api/users
Content-Type: application/json
{
"username": "nama_pengguna",
"email": "email@contoh.com"
}

Contoh menggunakan cURL:

> curl -X POST http://localhost:3000/api/users -H "Content-Type: application/json" -d '{"userName": "nama_pengguna", "accountNumber": "1234567890", "emailAddress": "email@contoh.com", "identityNumber":"1234567890NP", "password": "password123"}'

### Get User By Id
Pada bagian ini, menggunakan cache strategy untuk mendapatkan user by id.

GET /api/users/{id}

Contoh menggunakan cURL:

> curl http://localhost:3000/api/users/1

### Update User By Id
Untuk bagian ini, perlu send request ke Login agar mendapatkan token auth. lalu pasangkan ke header Authorization.

## Lisensi

permata-asa-aitika
