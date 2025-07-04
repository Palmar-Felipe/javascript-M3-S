
import axios from "axios";
import {
  alertEliminarProducto,
  alertErrorCampos,
  alertErrorDuplicados,
  alertErrorNombreDuplicado,
  alertNuevoProductos,
  limpiarCamposProducto,
} from './datos-almacenados'

let productos = [];
let productoEditandoId = null;

let $nombreProducto = document.getElementById("productName");
let $precioProducto = document.getElementById("productPrice");
let $categoriaProducto = document.getElementById("productCategory");
let $botonAgregarProducto = document.getElementById("addProductButton");
let $listaProductos = document.getElementById("productList");

function obtenerProductos(callback) {
  axios.get("http://localhost:3000/productos")
    .then(res => {
      productos = res.data;
      mostrarProductos();
      if (callback) callback();
    })
    .catch(err => {
      console.error("Error al obtener productos", err);
    });
}

$botonAgregarProducto.addEventListener("click", () => {
  let nombre = $nombreProducto.value;
  let precio = parseFloat($precioProducto.value);
  let categoria = $categoriaProducto.value;

  if (nombre === "" || isNaN(precio) || categoria === "") {
    alertErrorCampos();
    return;
  }

  const nombreDuplicado = productos.some((e) => e.nombre === nombre && e.id !== productoEditandoId);
  if (nombreDuplicado) {
    alertErrorNombreDuplicado();
    return;
  }

  const nuevoProducto = {
    nombre,
    precio,
    categoria
  };

  if (productoEditandoId) {
    axios.put(`http://localhost:3000/productos/${productoEditandoId}`, nuevoProducto)
      .then(res => {
        const index = productos.findIndex(p => p.id === productoEditandoId);
        productos[index] = res.data;
        alertNuevoProductos();
        limpiarCamposProducto();
        productoEditandoId = null;
        mostrarProductos();
      })
      .catch(() => {
        alertErrorDuplicados();
      });
  } else {
    axios.post("http://localhost:3000/productos", nuevoProducto)
      .then(res => {
        productos.push(res.data); // Agrega sin recargar toda la lista
        alertNuevoProductos();
        limpiarCamposProducto();
        mostrarProductos();
      })
      .catch(() => {
        alertErrorDuplicados();
      });
  }
});

function mostrarProductos() {
  $listaProductos.innerHTML = "";
  productos.forEach((prod) => {
    $listaProductos.innerHTML += `<li>
      nombre ${prod.nombre} - $${prod.precio} (${prod.categoria})
      <button class="deleteProduct" data-id="${prod.id}">Eliminar</button>
      <button class="editProduct" data-id="${prod.id}">Editar</button>
    </li>`;
  });

  document.querySelectorAll(".deleteProduct").forEach((button) => {
    button.addEventListener("click", (e) => {
      const id = e.target.getAttribute("data-id");
      eliminarProducto(id);
    });
  });

  document.querySelectorAll(".editProduct").forEach((button) => {
    button.addEventListener("click", (e) => {
      const id = e.target.getAttribute("data-id");
      editarProducto(id);
    });
  });
}

function eliminarProducto(id) {
  axios.delete(`http://localhost:3000/productos/${id}`)
    .then(() => {
      productos = productos.filter(p => p.id != id);
      alertEliminarProducto();
      mostrarProductos();
    })
    .catch(() => {
      console.error("Error al eliminar producto");
    });
}

function editarProducto(id) {
  const producto = productos.find(p => p.id == id);
  if (!producto) return;

  $nombreProducto.value = producto.nombre;
  $precioProducto.value = producto.precio;
  $categoriaProducto.value = producto.categoria;
  productoEditandoId = id;
}

window.addEventListener("DOMContentLoaded", () => obtenerProductos());



























// Función para agregar un producto
// $botonAgregarProducto.addEventListener("click", () => {
  
//   let nombre = $nombreProducto.value;
//   let precio = parseFloat($precioProducto.value);
//   let categoria = $categoriaProducto.value;

//   // Validar campos
//   if ( nombre === "" || isNaN(precio) || categoria === "") {
//     alertErrorCampos();
//     return;
//   }

//   const productoDuplicado = productos.some(
//     (e) =>

//       e.nombre === nombre &&
//       e.precio === precio &&
//       e.categoria === categoria
//   );

//   if (productoDuplicado) {
//     alertErrorDuplicados()
//     return;
//   }

 

//   const nombreDuplicado = productos.some((e) => e.nombre === nombre);
//   if (nombreDuplicado) {
//     alertErrorNombreDuplicado()
//     return;
//   }

//   const nuevoProducto = {
   
//     nombre: nombre,
//     precio: precio,
//     categoria: categoria,
//   };

//   productos.push(nuevoProducto);
//   alertNuevoProductos();
//   mostrarProductos();
//   limpiarCamposProducto();
    
  
// });

// function mostrarProductos() {

//   $listaProductos.innerHTML = "";
//   productos.forEach((prod) => {
//     $listaProductos.innerHTML += `<li>
//       nombre ${prod.nombre} - $${prod.precio} (${prod.categoria})
//       <button class="deleteProduct" data-nombre="${prod.nombre}">Eliminar</button>
//     </li>`;
//   });

//   // Agregar eventos a botones de eliminar
//   document.querySelectorAll(".deleteProduct").forEach((button) => {
//     button.addEventListener("click", (e) => {
//       const nombreDuplicado = e.target.getAttribute("data-nombre");
//       eliminarProducto(nombreDuplicado);
//     });
//   });
// }

// function eliminarProducto(nombre) {
//   productos = productos.filter((prod) => prod.nombre!== nombre);

//   mostrarProductos();
//   alertEliminarProducto();

// }



