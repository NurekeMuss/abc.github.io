document.getElementById('openModalBtn').addEventListener('click', function() {
    document.getElementById('modal').style.display = 'flex';
});

document.getElementById('closeModalBtn').addEventListener('click', function() {
    document.getElementById('modal').style.display = 'none';
});

let swiper = new Swiper(".slide-content", {
    slidesPerView: 3,
    spaceBetween: 25,
    loop: true,
    centerSlide: 'true',
    fade: 'true',
    grabCursor: 'true',
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
      dynamicBullets: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },

    breakpoints:{
        0: {
            slidesPerView: 1,
        },
        520: {
            slidesPerView: 2,
        },
        950: {
            slidesPerView: 3,
        },
    },
  });

  // Initialize Swiper for Certificates
let certificateSwiper = new Swiper(".certificate-carousel .slide-content", {
    slidesPerView: 5,
    spaceBetween: 25,
    loop: true,
    centerSlide: true,
    fade: true,
    grabCursor: true,
    pagination: {
        el: ".certificate-carousel .swiper-pagination",
        clickable: true,
        dynamicBullets: true,
    },
    navigation: {
        nextEl: ".certificate-carousel .swiper-button-next",
        prevEl: ".certificate-carousel .swiper-button-prev",
    },
    breakpoints: {
        0: {
            slidesPerView: 1,
        },
        520: {
            slidesPerView: 2,
        },
        950: {
            slidesPerView: 3,
        },
        1200: {
            slidesPerView: 5,
        },
    },
});

const track = document.querySelector('.carousel-track');
const pagination = document.querySelector('.carousel-pagination');
const items = document.querySelectorAll('.carousel-item');
const itemsPerPage = 5;
let currentIndex = 0;

function createPagination() {
    const totalPages = Math.ceil(items.length / itemsPerPage);
    for (let i = 0; i < totalPages; i++) {
        const button = document.createElement('button');
        button.addEventListener('click', () => moveToPage(i));
        if (i === 0) button.classList.add('active');
        pagination.appendChild(button);
    }
}

function updatePagination() {
    const buttons = pagination.querySelectorAll('button');
    buttons.forEach(button => button.classList.remove('active'));
    buttons[Math.floor(currentIndex / itemsPerPage)].classList.add('active');
}

function moveCarousel(direction) {
    const totalPages = Math.ceil(items.length / itemsPerPage);
    currentIndex += direction * itemsPerPage;
    if (currentIndex < 0) currentIndex = (totalPages - 1) * itemsPerPage;
    if (currentIndex >= items.length) currentIndex = 0;
    track.style.transform = `translateX(-${currentIndex * (100 / itemsPerPage)}%)`;
    updatePagination();
}

function moveToPage(pageIndex) {
    currentIndex = pageIndex * itemsPerPage;
    track.style.transform = `translateX(-${currentIndex * (100 / itemsPerPage)}%)`;
    updatePagination();
}

createPagination();

const testimonialTrack = document.querySelector('.testimonial-carousel-track');
const testimonialPagination = document.querySelector('.testimonial-carousel-pagination');
const testimonialItems = document.querySelectorAll('.testimonial-carousel-item');
const testimonialItemsPerPage = 3;
let testimonialCurrentIndex = 0;

function createTestimonialPagination() {
    const totalPages = Math.ceil(testimonialItems.length / testimonialItemsPerPage);
    for (let i = 0; i < totalPages; i++) {
        const button = document.createElement('button');
        button.addEventListener('click', () => moveToTestimonialPage(i));
        if (i === 0) button.classList.add('active');
        testimonialPagination.appendChild(button);
    }
}

function updateTestimonialPagination() {
    const buttons = testimonialPagination.querySelectorAll('button');
    buttons.forEach(button => button.classList.remove('active'));
    buttons[Math.floor(testimonialCurrentIndex / testimonialItemsPerPage)].classList.add('active');
}

function moveCarousel(direction) {
    const totalPages = Math.ceil(testimonialItems.length / testimonialItemsPerPage);
    testimonialCurrentIndex += direction * testimonialItemsPerPage;
    if (testimonialCurrentIndex < 0) testimonialCurrentIndex = (totalPages - 1) * testimonialItemsPerPage;
    if (testimonialCurrentIndex >= testimonialItems.length) testimonialCurrentIndex = 0;
    testimonialTrack.style.transform = `translateX(-${testimonialCurrentIndex * (100 / testimonialItemsPerPage)}%)`;
    updateTestimonialPagination();
}

function moveToTestimonialPage(pageIndex) {
    testimonialCurrentIndex = pageIndex * testimonialItemsPerPage;
    testimonialTrack.style.transform = `translateX(-${testimonialCurrentIndex * (100 / testimonialItemsPerPage)}%)`;
    updateTestimonialPagination();
}

createTestimonialPagination();
