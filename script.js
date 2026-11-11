const navbarnav = document.querySelector('.navbarnav');
const hamburger = document.querySelector('#hamburgermenu');

hamburger.onclick = (e) => {
    e.preventDefault();
    navbarnav.classList.toggle('active');
};

// Klik di luar sidebar untuk menghilangkan nav
document.addEventListener('click', function (e) {
    if (!hamburger.contains(e.target) && !navbarnav.contains(e.target)) {
        navbarnav.classList.remove('active');
    }
});

// Setelah memilih menu/submenu di mode HP, tutup sidebar
navbarnav.querySelectorAll('a').forEach(function (link) {
    link.addEventListener('click', function () {
        navbarnav.classList.remove('active');
    });
});


// ===== Pesan via WhatsApp =====
const NOMOR_WA_ADMIN = '62812345678910';

document.querySelectorAll('.menucard').forEach(function (card) {
    const nama = card.querySelector('.menucardtitle').textContent.trim();
    const pesan = 'Halo kak, saya tertarik dengan produk ' + nama + '. Boleh minta info lebih lanjut?';
    card.href = 'https://wa.me/' + NOMOR_WA_ADMIN + '?text=' + encodeURIComponent(pesan);
});
