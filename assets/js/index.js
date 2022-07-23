const propiedadesJSON = [
  {
    name: "Casa de campo",
    description: "Un lugar ideal para descansar de la ciudad",
    src: "assets/img/casa1.jpg",
    rooms: 2,
    m: 170
  },
  {
    name: "Casa de playa",
    description: "Despierta tus días oyendo el oceano",
    src:
      "assets/img/casa2.jpg",
    rooms: 2,
    m: 130
  },
  {
    name: "Casa en el centro",
    description: "Ten cerca de ti todo lo que necesitas",
    src:
      "assets/img/casa3.jpg",
    rooms: 1,
    m: 80
  },
  {
    name: "Casa rodante",
    description: "Conviertete en un nómada del mundo sin salir de tu casa",
    src:
      "https://cdn.bioguia.com/embed/3d0fb0142790e6b90664042cbafcb1581427139/furgoneta.jpg",
    rooms: 1,
    m: 6
  },
  {
    name: "Departamento",
    description: "Desde las alturas todo se ve mejor",
    src:
      "https://www.adondevivir.com/noticias/wp-content/uploads/2016/08/depto-1024x546.jpg",
    rooms: 3,
    m: 200
  },
  {
    name: "Mansión",
    description: "Vive una vida lujosa en la mansión de tus sueños ",
    src:
      "assets/img/casa5.jpg",
    rooms: 5,
    m: 500
  }
];
let inicio = () => (propiedades.innerHTML = '');

let propiedades = document.querySelector('.propiedades');
let total = document.querySelector('.total');


const busqueda = (casas = propiedadesJSON) => {
  inicio();
  for (casa of casas) {
    textoHtml = `
  <div class="propiedad">
                <div class="img" style="background-image: url('${casa.src}')"></div>
                <section>
                    <h5>${casa.name}</h5>
                    <div class="d-flex justify-content-between">
                        <p>Cuartos: ${casa.rooms}</p>
                        <p>Metros: ${casa.m}</p>
                    </div>
                    <p class="my-3">${casa.description}</p>
                    <button class="btn btn-info ">Ver más</button>
                </section>
            </div>`
    propiedades.innerHTML += textoHtml;
  };

  total.innerHTML = casas.length;
};
let btn = document.querySelector('.btn');
btn.addEventListener('click', () => {
  let habitaciones = document.querySelector('.habitaciones').value;
  let minMetros = document.querySelector('.minMetros').value;
  let maxMetros = document.querySelector('.maxMetros').value;

  if (habitaciones > 0 && minMetros >= 1 && maxMetros >= 1) {
    const casasFiltradas = propiedadesJSON.filter(
      (casa) => casa.rooms >= habitaciones && casa.m >= minMetros && casa.m <= maxMetros
    );
    busqueda(casasFiltradas);
  } else {
    alert('Se deben completar todos los filtos para poder realizar la busqueda.')
  }

});

busqueda()