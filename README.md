# Integrasi Saweria Webhook dengan Vercel

## Cara Membuat Akun Vercel
1. Daftar akun Vercel melalui situs web resmi Vercel.
2. Pilih metode pendaftaran yang diinginkan.
3. Isi formulir pendaftaran dan verifikasi akun Anda.

## Cara Deploy Project ke Vercel
1. Buat repository GitHub untuk project Anda.
2. Instal Vercel CLI dengan menjalankan perintah `npm install -g vercel`.
3. Jalankan perintah `vercel login` untuk login ke akun Vercel Anda.
4. Jalankan perintah `vercel` di direktori project Anda untuk memulai proses deployment.
5. Ikuti instruksi yang diberikan oleh Vercel CLI untuk menyelesaikan deployment.

## Cara Mengaktifkan Webhook di Saweria
1. Login ke akun Saweria Anda.
2. Cari menu "Integrasi" dan pilih "Webhook".
3. Klik tombol "Tambah Webhook" dan isi formulir dengan informasi berikut:
 * URL: URL endpoint webhook Anda di Vercel.
 * Event: Pilih event yang ingin Anda terima.
4. Klik tombol "Simpan" untuk mengaktifkan webhook.

## Tips
* Pastikan Anda telah mengkonfigurasi endpoint webhook di project Anda untuk menerima request dari Saweria.
* Gunakan secret key untuk memverifikasi signature webhook dan mencegah serangan keamanan.
