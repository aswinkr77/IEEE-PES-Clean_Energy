var swiper = new Swiper('.swiper-container', {
    spaceBetween: 30,
    centeredSlides: true,
    loop: true,
    autoplay: {
      delay: 5000,
      disableOnInteraction: false,
    },
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
});

AOS.init();

document.getElementById("toggleButton").addEventListener("click", () => {
    document.getElementById("modal").style.display = "flex";
});

document.getElementById("close").addEventListener("click", () => {
    document.getElementById("modal").style.display = "none";
});

let modalMenus = document.querySelectorAll(".modal-menu a");

modalMenus.forEach(function (item) {
    item.addEventListener("click", () => {
      document.getElementById("modal").style.display = "none";
    });
});