const contenedorBandera = document?.querySelector("#contenedorBandera");
const listaIdiomas = document?.querySelector("#listaIdiomas");

const botonBuscar = document?.querySelector("#botonBuscar");
const campoBuscar = document?.querySelector("#campoBuscar");

const carrusel = document?.querySelector("#carouselExampleAutoplaying");
const articuloCarrusel = document?.querySelectorAll(".header-item");
const contenedorCarrusel = document?.querySelector(".carousel-container");

const swiper = new Swiper('.carousel-the-most-trendy', {
    direction: 'horizontal',
    loop: true,
    slidesPerView: 4,
    spaceBetween: 20,
    navigation: {
        nextEl: '.the-most-trendy-button-next',
        prevEl: '.the-most-trendy-button-prev'
    },
    breakpoints: {
        0: {
            slidesPerView: 2,
            spaceBetween: 15
        },
        576: {
            slidesPerView: 3,
            spaceBetween: 15
        },
        768: {
            slidesPerView: 3,
            spaceBetween: 15
        },
        992: {
            slidesPerView: 4,
            spaceBetween: 15
        },
        1200: {
            slidesPerView: 4,
            spaceBetween: 15
        },
        1400: {
            slidesPerView: 5,
            spaceBetween: 15
        }
    }
});

const iconosBanderas = {
    "es": "🇪🇦",
    "en": "🇺🇸",
    "fr": "🇫🇷",
    "it": "🇮🇹" ,
    "de": "🇩🇪",
    "pt": "🇵🇹"
};

const fondoArticulosEncabezado = ["header-1.jpg", "header-2.jpg", "header-3.jpg"];

window.onload = () => {
    campoBuscar.hidden = true;
}

listaIdiomas.addEventListener('change', (event) => {
    contenedorBandera.innerHTML = iconosBanderas[event.target.value];
});

botonBuscar.addEventListener("click", () => {
    campoBuscar.hidden = false;
});

carrusel.addEventListener("slide.bs.carousel", (event) => {
    contenedorCarrusel.style.backgroundImage = `url("/public/img/header/${fondoArticulosEncabezado[event.to]}")`;
    articuloCarrusel[event.to].style.backgroundImage = `url("/public/img/header/${fondoArticulosEncabezado[event.to]}")`;
});
