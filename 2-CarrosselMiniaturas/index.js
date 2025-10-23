const carrosselPrincipal = new Splide("#carrossel-principal", {
    fixedWidth: 600,
    fixedHeight: 600,
    cover: true,
    type: "fade",
    pagination: false,
    arrows: false,
});

const miniaturasCarrossel = new Splide("#miniaturas", {
    fixedWidth: 100,
    fixedHeight: 100,
    cover: true,
    gap: 10,
    pagination: false,
    isNavigation: true,
    rewind: true,
});

carrosselPrincipal.sync(miniaturasCarrossel);
carrosselPrincipal.mount();
miniaturasCarrossel.mount();
