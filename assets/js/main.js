
document.addEventListener("DOMContentLoaded", () =>{
  console.log("DOM Cargado")
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




 
  