// Selección de los elementos para la lista de idiomas.
const contenedorBandera = document?.querySelector("#contenedorBandera");
const listaIdiomas = document?.querySelector("#listaIdiomas");

// Selección de los elementos para la busqueda.
const botonBuscar = document?.querySelector("#botonBuscar");
const campoBuscar = document?.querySelector("#campoBuscar");

// Seleción de los elementos del carrusel en encabezado principal.
const carrusel = document?.querySelector("#carouselExampleAutoplaying");
const articuloCarrusel = document?.querySelectorAll(".header-item");
const contenedorCarrusel = document?.querySelector(".carousel-container");

// Selección de los elementos relacionados con la sección de noticias.
const seccionNoticias = document?.querySelector("#seccionNoticias");
const botonMostrarTodas = document?.querySelector("#mostrarTodas");

// Plantilla de noticia para agregar cada vez que se da clic en el boton mostrar más noticias.
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

// Configuraciones de los carrusel con uso de Swiper.
const carruselLoMasVendido = new Swiper('.carousel-the-most-trendy', {
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

const carruselMarcas = new Swiper(".carousel-brands", {
    direction: 'horizontal',
    loop: true,
    autoplay: {
        delay: 5000,
    },
    slidesPerView: 9,
    spaceBetween: 20,
    navigation: {
        nextEl: '.brands-button-next',
        prevEl: '.brands-button-prev'
    },
    breakpoints: {
        0: {
            slidesPerView: 5,
            spaceBetween: 20
        },
        576: {
            slidesPerView: 5,
            spaceBetween: 20
        },
        768: {
            slidesPerView: 7,
            spaceBetween: 20
        },
        992: {
            slidesPerView: 9,
            spaceBetween: 20
        },
        1200: {
            slidesPerView: 9,
            spaceBetween: 20
        },
        1400: {
            slidesPerView: 9,
            spaceBetween: 20
        }
    }
}); 

// Iconos de banderas por país.
const iconosBanderas = {
    "es": "🇪🇦",
    "en": "🇺🇸",
    "fr": "🇫🇷",
    "it": "🇮🇹" ,
    "de": "🇩🇪",
    "pt": "🇵🇹"
};

// Fondos del encabezado principal.
const fondoArticulosEncabezado = ["header-1.webp", "header-2.webp", "header-3.webp"];

// Seccón de eventos a cada elementos.
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