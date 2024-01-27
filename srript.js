// Toglle class active untuk hamburger menu
const navbarNav = document.querySelector('.navbar-nav');
document.querySelector('#humbuger-menu').onclick = () => {
    navbarNav.classList.toggle('active');
};

// Toglle kelas active search-form/pencarian
const searchForm = document.querySelector('.search-form');
const searchButton = document.querySelector('#search-button');
const searchBox = document.querySelector('#search-box');

searchButton.onclick = (e) => {
    searchForm.classList.toggle('active');
    feather.replace();
    searchBox.focus();
    e.preventDefault();
};

// Toggle untuk shopping cart
const shopingCart = document.querySelector('.shoping-cart');
document.querySelector('#shoping-cart-button').onclick = (e) => {
    shopingCart.classList.toggle('active');
    e.preventDefault();
};

// Klik di luar layar untuk menyembunyikan navbar, search form, dan shopping cart
const hm = document.querySelector('#humbuger-menu');
const sb = document.querySelector('#search-button');
const sc = document.querySelector('#shoping-cart-button');

document.addEventListener('click', function (e) {
    if (!hm.contains(e.target) && !navbarNav.contains(e.target)) {
        navbarNav.classList.remove('active');
    }
    if (!sb.contains(e.target) && !searchForm.contains(e.target)) {
        searchForm.classList.remove('active');
    }
    if (!sc.contains(e.target) && !shopingCart.contains(e.target)) {
        shopingCart.classList.remove('active');
    }
});

// Modal Detail Box
const itemDetailModal = document.querySelector('#item-detail-modal');
const itemDetailButtons = document.querySelectorAll('.item-detail-button');

itemDetailButtons.forEach((btn) => {
    btn.onclick = (e) => {
        itemDetailModal.style.display = 'flex';
        e.preventDefault();
    };
});

// Klik close modal
document.querySelector('.modal .close-icon').onclick = (e) => {
    itemDetailModal.style.display = 'none';
    e.preventDefault();
};

// Klik di luar modal
window.onclick = (e) => {
    if (e.target == itemDetailModal) {
        itemDetailModal.style.display = 'none';
    }
};

// Modal 2
const itemDetailModal2 = document.querySelector('#item-detail-modal2');
const itemDetailButtons2 = document.querySelectorAll('.item-detail-button2');

itemDetailButtons2.forEach((btn) => {
    btn.onclick = (e) => {
        itemDetailModal2.style.display = 'flex';
        e.preventDefault();
    };
});

// Tombol close modal 2
document.querySelector('.modal2 .close-icon').onclick = (e) => {
    itemDetailModal2.style.display = 'none';
    e.preventDefault();
};

// Klik di luar modal 2
window.onclick = (e) => {
    if (e.target == itemDetailModal2) {
        itemDetailModal2.style.display = 'none';
    }
};

// Modal 3
const itemDetailModal3 = document.querySelector('#item-detail-modal3');
const itemDetailButtons3 = document.querySelectorAll('.item-detail-button3');

itemDetailButtons3.forEach((btn) => {
    btn.onclick = (e) => {
        itemDetailModal3.style.display = 'flex';
        e.preventDefault();
    };
});

// Klik close modal 3
document.querySelector('.modal3 .close-icon').onclick = (e) => {
    itemDetailModal3.style.display = 'none';
    e.preventDefault();
};

// Klik di luar modal 3
window.onclick = (e) => {
    if (e.target == itemDetailModal3) {
        itemDetailModal3.style.display = 'none';
    }
};
