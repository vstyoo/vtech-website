<!-- VTECH ROBOTICS STORE DOCUMENTATION -->

### Definition: 
<vtech merupakan sebuah website yang sifatnya personal web, dimana website ini bertugas untuk membuat sebuah web yang mendisplay berbagai macam kebutuhan penunjang ebuah project robotika sekaligus menjual barang-barang tersebut.

## 📦 Fitur
- Katalog produk mikrokontroler dan sensor
- Sistem cart dan pencarian
- Responsif untuk mobile dan desktop
- Blog seputar robotika & IoT

## Struktur web:
- Home 	   : Menampilkan definisi awal website, dan meng-highlight segala jenis items/komponen yang sifatnya primary dan menjadi tourist impression.
- About    : Menampilkan behaviour,reason,dan goals dari website vetch.
- Products : Mendisplay semua jenis produk dan pricing yang ingin dijual kepada para users.
- Blog 	   : Menampilkan berbagai artikel yang bersifat updateable, menjelaskan perkembangan dari website vtech ini nantinya.
- Contact  : Memberikan layanan service kepada user dengan menyertakan identitas digital,seperti email dan nomor faximile
/- Search icon : Memudahkan user dalam mencari "keyword" dari jenis produk yang di tampilkan.
/- Cart icon   : Mengarahkan user ke menu product untuk membeli produk yang di jual.

--------------------------------------------------
## Page Content's:
[Home] : 
<--Navbar Menu : Home, About, Products, Blog, Contact, Search icon, Cart icon
<--Hero Section : Highlight demand dari vtech.com (include 2 button< buy && watch video >) + product images
<--Highlight : Product unggulan dengan penjualan terbanyak
<--Main product : Menampilkan product utama yang ingin di jual
<--Review card : Menampilkan reviews positif dari para client
<--CTA section : Menawarkan program subscribe kepada user
<--Footer : Menampilkan usefull links, social media, address, privacy policy, contact

<About:
/VTECH adalah perusahaan yang bergerak di bidang penyediaan alat dan komponen elektronik untuk kebutuhan robotika, Internet of Things (IoT), dan pengembangan teknologi pintar. Kami hadir untuk menjadi solusi terbaik bagi pelajar, hobiis, pengembang, hingga institusi pendidikan yang membutuhkan komponen berkualitas untuk menunjang berbagai proyek teknologi.
/Didirikan dengan semangat inovasi dan edukasi, VTECH berkomitmen untuk mendukung kemajuan teknologi di Indonesia melalui penyediaan produk-produk yang handal, terjangkau, dan mudah diakses. Kami percaya bahwa setiap orang bisa menciptakan solusi cerdas — asal didukung dengan alat yang tepat >
--------------------------------------------------

## 🚀 Visi Kami
Menjadi platform terpercaya dan terlengkap dalam penyediaan alat robotika dan IoT di Indonesia, sekaligus mendukung generasi muda untuk berkembang di era teknologi digital.

## 🚀 Misi Kami
- Menyediakan produk berkualitas tinggi untuk proyek-proyek robotika dan IoT.
- Mendukung kegiatan edukasi teknologi melalui produk yang relevan dan edukatif.
- Menjadi mitra terpercaya bagi komunitas teknologi, pelajar, dan institusi pendidikan.
- Menyediakan layanan cepat, responsif, dan terpercaya.

## ✨ Keunggulan VTECH
✅ Spesialis Robotika & IoT
<Kami fokus pada penyediaan perangkat yang berkaitan langsung dengan pengembangan robot, sistem otomatisasi, dan teknologi pintar.

✅ Produk Terjamin
<Semua produk dikurasi secara ketat agar kompatibel dengan kebutuhan proyek edukatif maupun profesional.

✅ Dukungan Edukasi
<Selain produk, kami juga menyajikan konten blog, tutorial, dan tips seputar pemrograman mikrokontroler dan pengembangan sistem IoT.

✅ Layanan Ramah & Cepat
<Kami melayani dengan sepenuh hati, siap membantu pelanggan dari tahap pemula hingga tingkat lanjut.


### LINK ICONS ###

search icon : <i class="ri-search-line"></i>
profile acc : <i class="ri-account-circle-line"></i>
cart icon : <i class="ri-shopping-cart-line"></i>
gitHub icon : <i class="ri-github-fill"></i>
menu icon : <i class="ri-menu-line"></i>
right arrow : <i class="ri-arrow-right-line"></i>
TikTok : <i class="ri-tiktok-line"></i>
Instagram: <i class="ri-instagram-line"></i>
linkedin : <i class="ri-linkedin-box-line"></i>
facebook: <i class="ri-facebook-box-fill"></i>
email : <i class="ri-mail-line"></i>
twitter : <i class="ri-twitter-x-fill"></i>
play-circle : <i class="ri-play-circle-line"></i>
robot-icon : <i class="ri-robot-2-line"></i>
protection icon : <i class="ri-shield-check-line"></i>
service-icon : <i class="ri-service-line"></i>
star-icon : <i class="ri-star-fill"></i>
star-half-icon : <i class="ri-star-half-line"></i>
checklist-icon : <i class="ri-check-line"></i>
chart-box : <i class="ri-bar-chart-box-ai-line"></i>
event-icon : <i class="ri-bookmark-3-fill"></i>
offers : <i class="ri-color-filter-ai-line"></i>


## 📊 COLOR PALLETE

--primary gradient : #a855f7, #ec4899, #eab308
--paragraph : #222
--button : #ab34eb hover:#791dab , #fff hover: #e0dede



@font-face {
  font-family: 'AeonikFono';
  src: url('/assets/fonts/AeonikFonoProTRIAL-Regular.otf') format('opentype');
  font-weight: normal;
  font-style: normal;
  font-display: swap;
}


body{
  font-family: 'AeonikFono', sans-serif;
  scroll-behavior: smooth;
}

i{
  font-size: 19px;
  display: inline-block;
}



## Arachnobot
Arachnobot is a lightweight, spider-inspired robot equipped with four servo-powered legs that mimic natural crawling movements. With an onboard ultrasonic sensor, Arachnobot can detect and avoid obstacles in its path, making it a simple yet intelligent walker for exploration and obstacle navigation.





<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Dark/Light Mode Toggle</title>
  <!-- Load Tailwind CSS -->
  <script src="https://cdn.tailwindcss.com"></script>
  <!-- Load Remix Icons -->
  <link href="https://cdn.jsdelivr.net/npm/remixicon@2.5.0/fonts/remixicon.css" rel="stylesheet">
  <style>
    /* Custom CSS untuk memastikan animasi smooth */
    .mode-toggle-container {
      --toggle-width: 80px;
      --toggle-height: 32px;
      --toggle-padding: 4px;
      position: relative;
    }
    
    .toggle-ball {
      position: absolute;
      top: 50%;
      transform: translateY(-50%);
      left: var(--toggle-padding);
      transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
    }
    
    .mode-toggle.active .toggle-ball {
      left: calc(var(--toggle-width) - var(--toggle-height) + 6px);
    }
    
    .light-icon, .dark-icon {
      transition: all 0.3s ease;
      top: 50%;
      transform: translateY(-50%);
    }
    
    .mode-toggle.active .light-icon {
      opacity: 1;
    }
    
    .mode-toggle:not(.active) .dark-icon {
      opacity: 1;
    }
    
    .mode-toggle.active .dark-icon,
    .mode-toggle:not(.active) .light-icon {
      opacity: 0.5;
    }
  </style>
</head>
<body class="min-h-screen flex items-center justify-center transition-colors duration-300 bg-gray-100 dark:bg-gray-900">
  <div class="container mx-auto px-4">
    <ul class="flex justify-center">
      <li>
        <a href="#" class="mode-toggle mode-toggle-container text-[16px] flex justify-between items-center bg-neutral-700/30 p-[5px_10px] rounded-full w-[88px] h-[32px] shadow-[inset_0_1px_6px_rgba(255,255,255,0.05)] relative overflow-hidden">
          <span class="toggle-ball bg-[#fff] text-[#000] p-[2px] rounded-full w-6 h-6 flex items-center justify-center">
            <i class="ri-moon-line moon-ball-icon text-[14px]"></i>
            <i class="ri-sun-line sun-ball-icon hidden text-[14px]"></i>
          </span>
          <i class="ri-moon-line dark-icon text-[#fff] text-[14px] absolute left-4"></i>
          <i class="ri-sun-line light-icon text-[#fff] text-[14px] absolute right-4"></i>
        </a>
      </li>
    </ul>
    
    <div class="mt-12 text-center">
      <h1 class="text-3xl font-bold dark:text-white text-gray-900">Dark/Light Mode Toggle</h1>
      <p class="mt-4 dark:text-gray-300 text-gray-700">Klik tombol toggle di atas untuk mengubah tema</p>
    </div>
  </div>

  <script>
    document.addEventListener('DOMContentLoaded', function() {
      const modeToggle = document.querySelector('.mode-toggle');
      const html = document.documentElement;
      
      // Cek localStorage untuk mode yang disimpan
      const currentMode = localStorage.getItem('mode') || 'dark';
      if (currentMode === 'light') {
        html.classList.remove('dark');
        modeToggle.classList.add('active');
        document.querySelector('.moon-ball-icon').classList.add('hidden');
        document.querySelector('.sun-ball-icon').classList.remove('hidden');
      } else {
        html.classList.add('dark');
        modeToggle.classList.remove('active');
        document.querySelector('.sun-ball-icon').classList.add('hidden');
        document.querySelector('.moon-ball-icon').classList.remove('hidden');
      }
      
      // Toggle mode ketika diklik
      modeToggle.addEventListener('click', function(e) {
        e.preventDefault();
        modeToggle.classList.toggle('active');
        
        if (modeToggle.classList.contains('active')) {
          html.classList.remove('dark');
          localStorage.setItem('mode', 'light');
          // Switch icons
          document.querySelector('.moon-ball-icon').classList.add('hidden');
          document.querySelector('.sun-ball-icon').classList.remove('hidden');
        } else {
          html.classList.add('dark');
          localStorage.setItem('mode', 'dark');
          // Switch icons
          document.querySelector('.sun-ball-icon').classList.add('hidden');
          document.querySelector('.moon-ball-icon').classList.remove('hidden');
        }
      });
    });
  </script>
</body>
</html>
