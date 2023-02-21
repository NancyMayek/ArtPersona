const menuBtn = document.querySelector('#menu-btn');
let menuOpen = false;


menuBtn.addEventListener('click',() => {
    if(!menuOpen ){
       menuBtn.classList.add('open');
       menuOpen=true; 
        
        document.getElementById('links_2').style.display = "flex";

    }else{
        menuBtn.classList.remove('open');
        menuOpen=false;
        document.getElementById('links_2').style.display = "none";

    }
});



const element = document.getElementById('links_2'); // replace with your element's ID

function toggleDisplay() {
  if (window.matchMedia('(min-width: 660px) and (max-width: 1150px)').matches) {
    element.style.display = 'flex';
  } else {
    if (window.matchMedia('(max-width: 660px)').matches)
    menuBtn.classList.remove('open');
    element.style.display = 'none';
  }
}

window.addEventListener('resize', toggleDisplay);



/* Set the width of the side navigation to 250px and the left margin of the page content to 250px */
function openNav() {
  document.getElementById("mySidenav").style.width = "20rem";
  document.getElementById("main").style.marginLeft = "20rem";
}

/* Set the width of the side navigation to 0 and the left margin of the page content to 0 */
function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
  document.getElementById("main").style.marginLeft = "0";
}


const seccion_camisetas =  document.getElementById("Camisetas_Tarjetas");
const seccion_sudaderas =  document.getElementById("Sudaderas_Tarjetas");
const seccion_tasas =  document.getElementById("Tasas_Tarjetas");

const camisetas = [
  {id:1, nombre:"Camiseta Groovy para boda", imagen:"./imagenes/shrt_bride.jpg", precio:120, cantidad:1},
  {id:2, nombre:"Camiseta para parejas Mango", imagen:"./imagenes/parejas.jpg", precio:120, cantidad:1},
  {id:3, nombre:"Camiseta Generacional de Mujer", imagen:"./imagenes/familia.jpg", precio:120, cantidad:1},
  {id:4, nombre:"Camiseta Moderna Para Mama", imagen:"./imagenes/mama.jpg", precio:120, cantidad:1},
  {id:5, nombre:"Camiseta de Pixar para parejas", imagen:"./imagenes/peliculas.jpg", precio:120, cantidad:1}
]

const sudaderas = [
  {id:1, nombre:"Sudadera de Greta Van Fleet", imagen:"./imagenes/sud_GVF.jpg", precio:120, cantidad:1},
  {id:2, nombre:"Sudadera de Spiderman", imagen:"./imagenes/sud_spiderma.jpg", precio:120, cantidad:1},
  {id:3, nombre:"Sudadera de Chimuelo", imagen:"./imagenes/sud_httd.jpg", precio:120, cantidad:1},
  {id:4, nombre:"Sudadera para parejas", imagen:"./imagenes/sud_pareja.jpg", precio:120, cantidad:1},
  {id:5, nombre:"Sudadera de Bob Esponja", imagen:"./imagenes/sud_amigos.jpg", precio:120, cantidad:1}
]

const tasas = [
  {id:1, nombre:"Tasas para bodas", imagen:"./imagenes/tasa_bodas.jpg", precio:120, cantidad:1},
  {id:2, nombre:"Tasa para mama", imagen:"./imagenes/tasa_mama.jpg", precio:120, cantidad:1},
  {id:3, nombre:"Tasa infantil", imagen:"./imagenes/tasa_niños.jpg", precio:120, cantidad:1},
  {id:4, nombre:"Tasa con nombre", imagen:"./imagenes/tasa_nombre.jpg", precio:120, cantidad:1},
  {id:5, nombre:"Tasa para parejas", imagen:"./imagenes/tasa_pareja.jpg", precio:120, cantidad:1}
]

camisetas.forEach(item => {
  seccion_camisetas.innerHTML +=
 `<div id="Camiseta_${item.id}" class="tarjeta">
    <div id="producto-img">
        <img src="${item.imagen}" alt="${item.nombre}">
    </div>
    <div class="descripcion_producto_tarjeta"> 
        <h2>${item.nombre}</h2>
        <div>
            <h3>$${item.precio}</h3>
            <a class="carrito_btn" id="carrito_camiseta_${item.id}"><img src="./imagenes/addicon.png" alt="carrito_btn"></a>
        </div>
    </div>
</div>
` 
})

sudaderas.forEach(item => {
  seccion_sudaderas.innerHTML +=
 `<div id="Sudadera_${item.id}" class="tarjeta">
    <div id="producto-img">
        <img src="${item.imagen}" alt="${item.nombre}">
    </div>
    <div class="descripcion_producto_tarjeta"> 
        <h2>${item.nombre}</h2>
        <div>
            <h3>$${item.precio}</h3>
            <a class="carrito_btn" id="carrito_camiseta_${item.id}"><img src="./imagenes/addicon.png" alt="carrito_btn"></a>
        </div>
    </div>
</div>
` 
})

tasas.forEach(item => {
  seccion_tasas.innerHTML +=
 `<div id="Tasas_${item.id}" class="tarjeta">
    <div id="producto-img">
        <img src="${item.imagen}" alt="${item.nombre}">
    </div>
    <div class="descripcion_producto_tarjeta"> 
        <h2>${item.nombre}</h2>
        <div>
            <h3>$${item.precio}</h3>
            <a class="carrito_btn" id="carrito_camiseta_${item.id}"><img src="./imagenes/addicon.png" alt="carrito_btn"></a>
        </div>
    </div>
</div>
` 
})

