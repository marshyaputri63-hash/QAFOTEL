# Security Guidelines for Qafotel Company Profile Website

Dokumen ini merangkum prinsip-prinsip, kebijakan, dan praktik terbaik keamanan yang harus diterapkan saat membangun dan menjalankan situs profil perusahaan Qafotel—sebuah hotel butik dengan Jardin Coffee—menggunakan Next.js, TypeScript, dan PostgreSQL (Drizzle ORM).

---

## 1. Security by Design
- Mulai pertimbangan keamanan sejak arsitektur: definisikan boundary antara _public pages_ dan _admin CMS_ (/admin).
- Gunakan pola “_server-only_” (Next.js `import 'server-only'`) untuk modul yang memuat kredensial atau melakukan query ke database.
- Pisahkan _Data Access Layer_ (DAL) di folder `src/lib/dal` untuk menegakkan otorisasi dan validasi sebelum data ever reach UI.

## 2. Least Privilege & Access Control
- **CMS Admin**: proteksi route `/admin` dengan _passphrase_ rahasia (ENV var), tanpa menyimpan user/password di kode.
- **Database Role**: gunakan satu role PostgreSQL khusus aplikasi dengan izin terbatas (SELECT/INSERT/UPDATE/DELETE pada schema tertentu). Tidak pakai superuser.
- **Environment Variables**: simpan URL DB, passphrase CMS, secret JWT (jika dipakai) hanya di Vercel Secret Store. Jangan commit `.env` ke Git.

## 3. Authentication & Session Management
- CMS hanya satu pasphrase environment-based. Rotasi pasphrase jika terindikasi kebocoran.
- Semua endpoint admin (API routes atau Server Actions) harus memeriksa passphrase ulang setiap request.
- Pastikan header `Set-Cookie` (jika pakai cookie) menggunakan atribut `HttpOnly; Secure; SameSite=Strict`.

## 4. Input Validation & Output Encoding
- **Form Data & API Input**:
  - Pakai Zod atau schema validation setara untuk setiap Server Action yang menerima `FormData`.
  - Setiap field wajib (name, description, price, image upload) di-`parse` dan `sanitize` sebelum disimpan.
- **CSRF**:
  - CMS form berada di route POST-only Server Actions, sehingga CSRF risk minimal. Jika perlu, tambahkan token anti-CSRF (synchronizer token).
- **Output Encoding**:
  - Tampilkan konten dinamis (room descriptions, menu) lewat React escaping default. Hindari `dangerouslySetInnerHTML`.

## 5. Data Protection & Privacy
- **Enkripsi in transit**: Wajib HTTPS/TLS 1.2+ (Vercel sudah default).
- **Enkripsi at rest**: Gunakan Postgres dengan enkripsi disk pada provider (Vercel Postgres atau managed DB).
- **Hashing Password**: (Jika di-future diperlukan) gunakan Argon2/bcrypt dengan salt unik.
- **Sensitivitas Data**: Hindari menyimpan data sensitif (misal kartu kredit) saat ini—tidak ada booking online.

## 6. Drizzle ORM & Database Security
- Semua query melalui Drizzle ORM (parameterized by default) untuk mencegah SQL injection.
- Jika membutuhkan raw SQL, gunakan `sql` template tag dan hindari string concatenation manual.
- Terapkan Row-Level Security (RLS) di Postgres jika kelak ada multi-tenant atau pembagian akses per user.
- Konfigurasi connection pooling dengan driver `node-postgres` agar tidak mudah DoS lewat koneksi.

## 7. API & Service Security
- **Rate Limiting**: Tambahkan _middleware_ ringan (mis: `next-rate-limit`) untuk membatasi permintaan POST ke `/admin`.
- **CORS**: Default Next.js hanya melayani origin sendiri. Jangan buka wildcard `*` untuk admin API.
- **Error Handling**: Tangani error di API Routes/Server Actions dengan generik—jangan expose stack trace.

## 8. Web Application Security Hygiene
- **Headers**:
  - `Content-Security-Policy`: hanya izinkan skrip/domain sendiri, inline-style dengan nonce jika perlu.
  - `Strict-Transport-Security: max-age=63072000; includeSubDomains; preload`
  - `X-Content-Type-Options: nosniff`
  - `X-Frame-Options: DENY`
  - `Referrer-Policy: strict-origin-when-cross-origin`
- **Secure Cookies**: Semua cookie session atau CMS token (`sid`) set dengan `Secure; HttpOnly; SameSite=Strict`.
- **Subresource Integrity**: Jika pakai CDN pihak ketiga, gunakan SRI hashes.

## 9. Infrastructure & Configuration Management
- **Harden Serverless**: Vercel sudah managed, namun:
  - Nonaktifkan _debug mode_ di production (`NEXT_PUBLIC_DEBUG=false`).
  - Pastikan `next.config.js` tidak expose secret.
- **TLS Configuration**: Vercel menstandarkan TLS1.2+. Verifikasi cipher suite di dashboard.
- **File Permissions**: Jika ada file upload, simpan di bucket terpisah (mis: S3/GCP) dengan izin private; jangan di `/public`.

## 10. Dependency Management
- Gunakan versi Next.js ≥16.2.11 (tutup CVE React2Shell) dan Drizzle ORM ≥1.0.0.
- Pasang `npm audit` atau integrasi SCA (Dependabot) untuk mendeteksi CVE pada dependencies.
- Pakai `package-lock.json` agar build tetap deterministik.
- Minimalkan footprint: hanya install Tailwind, Zod, Drizzle, dan plugin Next.js yang dibutuhkan.

## 11. Monitoring & Incident Response
- Aktifkan logging request/admin error (tanpa isi sensitive) ke Vercel Logs atau platform eksternal.
- Definisikan prosedur rotasi passphrase CMS dan database credentials saat terdeteksi penyalahgunaan.

---

Dengan menerapkan pedoman ini, Qafotel akan memiliki situs profil yang tidak hanya informatif dan responsif, tetapi juga dibangun dengan prinsip keamanan “defense-in-depth,” “least privilege,” dan “fail securely” sejak awal.