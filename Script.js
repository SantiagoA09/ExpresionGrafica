document.addEventListener('DOMContentLoaded', function() {
    const form = document.querySelector('form');
    const sendButton = document.getElementById('sendButton');

    form.addEventListener('submit', function(event) {
        const nombre = document.getElementById('nombre').value.trim();
        const email = document.getElementById('email').value.trim();

        if (nombre === '' || email === '') {
            alert('Por favor completa todos los campos');
            event.preventDefault();
        } else {
            event.preventDefault(); 
            alert('Gracias por tu mensaje! Nos pondremos en contacto pronto');
            form.reset();
        }
    });

    const recetas = [
        {
            imagen: "imagenes/ArrozConPollo.png",
            titulo: "Arroz con Pollo",
            desc: "Plato tradicional con pollo, arroz amarillo y verduras.",
            enlace: "https://youtu.be/168HrdzakaA"
        },
        {
            imagen: "imagenes/pasta.jpg",
            titulo: "Pasta con Atún",
            desc: "Receta rápida y deliciosa para días ocupados.",
            enlace: "https://youtu.be/nPWrvcx3llM"
        },
        {
            imagen: "imagenes/papas.jpg",
            titulo: "Papas Asadas",
            desc: "Crujientes por fuera y tiernas por dentro.",
            enlace: "https://youtu.be/r_KA4yue2YQ"
        },
        {
            imagen: "imagenes/alitas.jpg",
            titulo: "Alitas de Pollo al Horno",
            desc: "Alitas crujientes y sabrosas, fáciles de hacer en casa con pocas especias.",
            enlace: "https://youtu.be/r3NeJzWYaF8"
        }
    ];

    const elementos = {
        imagen: document.getElementById("carrusel-imagen"),
        titulo: document.getElementById("carrusel-titulo"),
        desc: document.getElementById("carrusel-desc"),
        enlace: document.getElementById("carrusel-enlace")
    };

    let indiceActual = 0;

    function actualizar() {
        const receta = recetas[indiceActual];
        elementos.imagen.src = receta.imagen;
        elementos.imagen.alt = receta.titulo;
        elementos.titulo.textContent = receta.titulo;
        elementos.desc.textContent = receta.desc;
        elementos.enlace.href = receta.enlace;
    }
    window.siguiente = function() {
        indiceActual = (indiceActual + 1) % recetas.length;
        actualizar();
    };

    window.anterior = function() {
        indiceActual = (indiceActual - 1 + recetas.length) % recetas.length;
        actualizar();
    };
    // Inicializar
    actualizar();
});