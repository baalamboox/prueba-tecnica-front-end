const contenedorBandera = document?.querySelector("#contenedorBandera");
const listaIdiomas = document?.querySelector("#listaIdiomas");

const botonBuscar = document?.querySelector("#botonBuscar");
const campoBuscar = document?.querySelector("#campoBuscar");

const carrusel = document?.querySelector("#carouselExampleAutoplaying");
const articuloCarrusel = document?.querySelectorAll(".header-item");
const contenedorCarrusel = document?.querySelector(".carousel-container");

const seccionNoticias = document?.querySelector("#seccionNoticias");
const botonMostrarTodas = document?.querySelector("#mostrarTodas");

const plantillaNoticia = `
    <div class="col">
        <div class="card p-4 rounded-0 border-0 card-news">
            <div class="card-body">
                <h6 class="card-subtitle mb-2 text-body-secondary">
                    <nav aria-label="breadcrumb">
                        <ol class="breadcrumb">
                            <li class="breadcrumb-item">01 Junio 2024</li>
                            <li class="breadcrumb-item"><strong class="news">Noticia</strong></li>
                            <li class="breadcrumb-item"><strong class="comments">0 comentarios</strong></li>
                        </ol>
                    </nav>
                </h6>
                <h5 class="card-title text-capitalize fw-bold">Variedad de plantas carnivoras</h5>
                <p class="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi voluptatibus dolorem facere perspiciatis facil.</p>
            </div>
        </div>
    </div>
`;

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

botonMostrarTodas.addEventListener('click', () => {
    for(let i = 0; i < 4; i++) {
        seccionNoticias.insertAdjacentHTML("beforeend", plantillaNoticia);
    }
});