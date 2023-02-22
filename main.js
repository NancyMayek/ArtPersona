
//BURGER MENU-----------------------------------------------------
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

//CARRITO----------------------------------------------------------------

/* Set the width of the side navigation to 250px and the left margin of the page content to 250px */
function openNav() {
  document.getElementById("mySidenav").style.width = "25rem";
  añadir_carrito();
}

/* Set the width of the side navigation to 0 and the left margin of the page content to 0 */
function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
}



function calcularCantidad(id, cantidad, precio){
  let unidad_precio = cantidad * precio;
  const item_precio = document.getElementById(id);
  item_precio.innerHTML= "$"+ unidad_precio;
  
}

function calcularTotal(){
  
  const cartItems = JSON.parse(localStorage.getItem('cart') || '[]');
  if(cartItems.length === 0){
    precio_total.innerHTML="No hay productos en el carrito";
  }
  var totalPrice=0;
  cartItems.forEach(item => {
  const precio_total = document.getElementById('precio_total');
    totalPrice += item.price * item.quantity;
    precio_total.innerHTML= "$"+totalPrice;
  });
}

function añadir_carrito(){
 const cartDiv = document.getElementById('productos_carrito');
  const cartItems = JSON.parse(localStorage.getItem('cart') || '[]');
  const precio_total = document.getElementById('precio_total');
  if(cartItems.length === 0){
    precio_total.innerHTML="No hay productos en el carrito";
  }
  cartDiv.innerHTML=""; 
 
  cartItems.forEach(item => {
   
    cartDiv.innerHTML+= 
    `
      <div class="carrito_item" id="carrito_item_${item.id}">
                <img id="imagen" src="${item.image}">
                <h3 id="nombre">${item.name}</h3>
                <div id="cantidad_container">
                    <div id="botones_cantidad">
                        <button class="boton_blanco" id="btn_add_${item.id}" >+</button>
                        <button class="boton_blanco" id="btn_sub_${item.id}">-</button>
                    </div>
                    <h3 id="cantidad_${item.id}">${item.quantity}</h3>
                </div>
                <h3 id="precio_${item.id}">$${item.price}</h3>
                <button class="btn_borrar" id="btn_borrar_${item.id}">Borrar</button>
            </div>
    `
  });

  cartItems.forEach(item => {

    const plusButton =  document.getElementById('btn_add_'+item.id);
    const subButton =  document.getElementById('btn_sub_'+item.id);
    const borrarButton =  document.getElementById('btn_borrar_'+item.id);

    console.log("btn:",plusButton);
    const item_cantidad =  document.getElementById('cantidad_'+item.id);
    const carrito_div = document.getElementById('carrito_item_'+item.id);

   
    plusButton.addEventListener('click', () => {
      item.quantity++;
      item_cantidad.innerHTML=item.quantity;
      localStorage.setItem('cart', JSON.stringify(cartItems));
      calcularCantidad('precio_'+item.id,item.quantity,item.price);
      calcularTotal();
    });

    subButton.addEventListener('click', () => {
      if(item.quantity>1){
      item.quantity--;
      item_cantidad.innerHTML=item.quantity;
      localStorage.setItem('cart', JSON.stringify(cartItems));
      calcularCantidad('precio_'+item.id,item.quantity,item.price);
      calcularTotal();
      }
    });


    borrarButton.addEventListener('click', () => {
      const itemIndex = cartItems.findIndex(cartItem => cartItem.id === item.id);
      if (itemIndex !== -1) {
        cartItems.splice(itemIndex, 1);
        localStorage.setItem('cart', JSON.stringify(cartItems));
        carrito_div.remove();
      }
      calcularTotal();
    });

    
    
    calcularCantidad('precio_'+item.id,item.quantity,item.price);
    calcularTotal();
  });

}




//PRODUCTOS-------------------------------------------------------------------

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
            <a class="carrito_btn" onclick="addProductToCart('carrito_camiseta_${item.id}', '${item.nombre}', ${item.precio},'${item.imagen}')"  id="carrito_camiseta_${item.id}"><img src="./imagenes/addicon.png" alt="carrito_btn"></a>
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
            <a class="carrito_btn" onclick="addProductToCart('carrito_sudadera_${item.id}', '${item.nombre}', ${item.precio},'${item.imagen}')"  id="carrito_sudadera_${item.id}"><img src="./imagenes/addicon.png" alt="carrito_btn"></a>
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
            <a class="carrito_btn" onclick="addProductToCart('carrito_tasas_${item.id}', '${item.nombre}', ${item.precio}, '${item.imagen}')"  id="carrito_tasa_${item.id}" > <img src="./imagenes/addicon.png" alt="carrito_btn"> </a>
        </div>
    </div>
</div>
` 
})

function addProductToCart(id, name, price, image) {
  let cartItems = JSON.parse(localStorage.getItem('cart') || '[]');
  let cartItem = cartItems.find(item => item.id === id);
  if (cartItem) {
    cartItem.quantity++;
  } else {
    cartItem = {
      id,
      name,
      price,
      image,
      quantity: 1
    };
    cartItems.push(cartItem);
  }
  localStorage.setItem('cart', JSON.stringify(cartItems));

  añadir_carrito();
  
}

