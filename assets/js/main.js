
document.addEventListener("DOMContentLoaded", () =>{
  console.log("DOM Cargado")
  showProduct()
  
})  


const items = [
    {
      id: 1,
      name: 'Hoodies',
      price: 14.00,
      image: 'assets/images/featured1.png',
      category: 'hoodies',
      quantity: 10
    },
    {
      id: 2,
      name: 'Shirts',
      price: 24.00,
      image: 'assets/images/featured2.png',
      category: 'shirts',
      quantity: 15
    },
    {
      id: 3,
      name: 'Sweatshirts',
      price: 24.00,
      image: 'assets/images/featured3.png',
      category: 'shirts',
      quantity: 20
    }
  ]

  

  const loadComponent = () => {
    const loader = document.getElementById("loader")
    setTimeout(() => {
      loader.classList.add("hidden")
    }, 3000);
  };
   
document.addEventListener("DOMContentLoaded", loadComponent()  )







//BARRA DE NAVEGACION

  const menu = document.getElementById("menu")
  const navMenu = document.getElementsByClassName("nav-ul")
  const logostore = document.getElementsByClassName("nav-logoystore")
  const btnx = document.getElementById("cerrar")
  const store = document.getElementById("store")
  const luna = document.getElementById("luna")
  const navsec2 = document.getElementsByClassName("nav-secc2")

  menu.addEventListener( "click", e => {
    navMenu[0].classList.toggle("visible")
    menu.classList.toggle("no-visible2")
    luna.classList.toggle("no-visible2")
    btnx.classList.toggle("visible2")
    logostore[0].classList.toggle("no-visible")
    navsec2[0].classList.toggle("despl")
    
    
  }
   );

   btnx.addEventListener("click", e => {
    menu.classList.remove("no-visible2")
    btnx.classList.remove("visible2")
    luna.classList.remove("no-visible2")
    logostore[0].classList.remove("no-visible")
    navMenu[0].classList.remove("visible")
    navsec2[0].classList.remove("despl")
   });




const body = document.getElementsByTagName("body")

luna.addEventListener("click", e =>{
  body[0].classList.toggle("dark")
  if(luna.classList.contains("bx-moon")){
    luna.classList.replace("bx-moon", "bx-sun")
  }else{
    luna.classList.replace("bx-sun", "bx-moon")
  }

} );

const navCart = document.getElementsByClassName("nav-cart")
const cerrar2 = document.getElementById("cerrar2")

store.addEventListener("click", e => {
  navCart[0].classList.toggle("visiblec")
})

cerrar2.addEventListener("click", e => {
  navCart[0].classList.remove("visiblec")
  
})




/*
const showProduct = () => {

  const producto = document.getElementsByClassName("car-total")

  let fragment = `
  <h1 class="car-tittle">
    My cart
  </h1>
  `
  items.forEach( producto =>{

    fragment += `
  <div class="seccion2-productos" id="${producto.id}">
    <img src=${producto.img} alt="" class="productoimg2"> 
      <h3>
        ${producto.name}
      </h3>
      <p class="cartstock">
        Stok:${producto.quantity} | ${producto.price}
      </p>
      <p class="subtotal">
        Subtotal: ${producto.cantidad * producto.price} 
      </p>
      <button class="add1">
        +
      </button>
      <p class="conteo">
        ${producto.cantidad}
      </p>
      <button class="rest1">
        -
      </button>
  </div> `
    
   
    })

    
    producto[0].innerHTML = fragment 
      
    cartFunction()

   
}

 
function cartFunction(){
  const btnAdd = document.querySelectorAll(".add1")
  const cart = []

  btnAdd.forEach( button => {
    button.addEventListener( "click", e => {
      const id = parseInt(e.target.parentElement.id)
      const selectProduct = items.find( item => item.id === id)
      let index = cart.indexOf(selectProduct)

      if (index !== -1 ){
        cart[index].cantidad++
      }else{
        selectProduct.cantidad = 1
        cart.push(selectProduct)
      }
      console.log(cart)
      
    })
  })

  
}
*/

const showProduct = () => {

  const productos = document.getElementsByClassName("main-seccion2")

  let fragment = `
  `
  items.forEach( produ =>{

    fragment += `
    <div class="producto">
      <div class="seccion2-producto" id="${produ.id}">
        <img src= ${produ.image} alt="" class="productoimg">
        <button class="cartadd">
          +
        </button> 
        <div class="precios-stock">
          <p>
            $${produ.price}.00
          <br>
            ${produ.name}
          </p>
          <p>
            Stock: ${produ.quantity}
          </p>
        </div>
      </div>
    </div>       
    `
    
   
    })

    
    productos[0].innerHTML = fragment 
    cartFunction()
  
   
}

function cartFunction(){
  const btnAdd = document.querySelectorAll(".cartadd")
  console.log(btnAdd)
  const cart = []

  btnAdd.forEach( button => {
    button.addEventListener( "click", e => {
      const id = parseInt(e.target.parentElement.id)
      const selectProduct = items.find( item => item.id === id)
      let index = cart.indexOf(selectProduct)

      if (index !== -1 ){
        if(cart[index].quantity === cart[index].cantidad){
          alert("no")
        }else{
          cart[index].cantidad++
        }
      }else{
        selectProduct.cantidad = 1
        cart.push(selectProduct)
      }
      
      console.log(cart)
      showProductsInCart(cart)
      
    })
  })

  
}


function showProductsInCart (cart){
  const carrito = document.getElementsByClassName("car-total")
  
  let fragment = `
  <h1 class="car-tittle">
    My cart
  </h1>
  `
  cart.forEach( producto =>{
    fragment += `
  <div class="seccion2-productos" id="${producto.id}">
    <img src=${producto.image} alt="" class="productoimg2"> 
      <h3>
        ${producto.name}
      </h3>
      <p class="cartstock">
        Stok:${producto.quantity} | $${producto.price}.00
      </p>
      <p class="subtotal">
        Subtotal: $${producto.cantidad * producto.price}.00
      </p>
      <button class="add1">
        +
      </button>
      <p class="conteo">
        ${producto.cantidad}
      </p>
      <button class="rest1">
        -
      </button>
  </div> `   
    })

   
    console.log(cart)
    
    carrito[0].innerHTML = fragment 
    
    showTotales(cart)

}


function showTotales (cart){
  const cont3 = document.getElementsByClassName("pelo")

  let fragment2 = `
  <p class="car-items">
    ${cart[0].cantidad + cart[1].cantidad + cart[2].cantidad} items
  </p>
  <p class="car-totall">
    $${cart[0].cantidad * cart[0].price + cart[1].cantidad * cart[1].price + cart[2].cantidad * cart[2].price}.00
  </p>
  `

  cont3[0].innerHTML = fragment2
}