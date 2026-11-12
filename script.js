const navbarnav = document.querySelector('.navbarnav');
const hamburger = document.querySelector('#hamburgermenu');

hamburger.onclick = (e) => {
    e.preventDefault();
    navbarnav.classList.toggle('active');
};

// Ini untuk biar kalo klik diluar sidebar, nutup
document.addEventListener('click', function (e) {
    if (!hamburger.contains(e.target) && !navbarnav.contains(e.target)) {
        navbarnav.classList.remove('active');
    }
});

// untuk setelah pilih menu/submenu waktu mode HP, sidebarnya nutup
navbarnav.querySelectorAll('a').forEach(function (link) {
    link.addEventListener('click', function () {
        navbarnav.classList.remove('active');
    });
});

const NOMOR_WA_ADMIN = '62812345678910';

document.querySelectorAll('.menucard').forEach(function (card) {
    card.href = 'https://wa.me/' + NOMOR_WA_ADMIN + '?text=' + encodeURIComponent(pesan);
});
