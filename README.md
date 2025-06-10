# Integrasi Saweria Webhook dengan Vercel

## Table of Contents
* [Cara Membuat Akun Vercel](#cara-membuat-akun-vercel)
* [Cara Deploy Project ke Vercel](#cara-deploy-project-ke-vercel)
* [Cara Mengaktifkan Webhook di Saweria](#cara-mengaktifkan-webhook-di-saweria)

## Cara Membuat Akun Vercel
1. Buka situs web [Vercel](https://vercel.com/) dan klik "Sign Up".
2. Pilih metode pendaftaran yang diinginkan (GitHub, GitLab, atau Email).
3. Isi formulir pendaftaran dan verifikasi akun Anda.

## Cara Deploy Project ke Vercel
1. Buat repository GitHub untuk project Anda.
2. Instal Vercel CLI dengan menjalankan perintah `npm install -g vercel` di terminal.
3. Jalankan perintah `vercel login` untuk login ke akun Vercel Anda.
4. Jalankan perintah `vercel` di direktori project Anda untuk memulai proses deployment.
5. Ikuti instruksi yang diberikan oleh Vercel CLI untuk menyelesaikan deployment.

## Cara Mengaktifkan Webhook di Saweria
1. Buka situs web [Saweria](https://saweria.co/) dan login ke akun Anda.
2. Klik pada menu "Integrasi" dan pilih "Webhook".
3. Klik tombol "Tambah Webhook" dan isi formulir dengan informasi berikut:
 * URL: URL endpoint webhook Anda di Vercel (contoh: `https://namaproject.vercel.app/api/webhook`)
 * Event: Pilih event yang ingin Anda terima (contoh: "Donasi baru")
4. Klik tombol "Simpan" untuk mengaktifkan webhook.

## Tips
* Pastikan Anda telah mengkonfigurasi endpoint webhook di project Anda untuk menerima request dari Saweria.
* Gunakan secret key untuk memverifikasi signature webhook dan mencegah serangan keamanan.
* 
