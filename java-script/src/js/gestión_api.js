

import { alertError, alertErrorCampos, alertErrorDuplicados, } from './datos-almacenados'
let productos = [];

const productosPredefinidos = {
  1: { id: 1, nombre: "PlayStation 4", precio: 2000, categoria: "Videojuego" },
  2: { id: 2, nombre: "iPhone XS", precio: 3000, categoria: "Smartphone" },
  3: { id: 3, nombre: "Tablet", precio: 4000, categoria: "Electrónico" },
};


let $nombreProducto = document.getElementById("productName");
let $precioProducto = document.getElementById("productPrice");
let $categoriaProducto = document.getElementById("productCategory");
let $botonAgregarProducto = document.getElementById("addProductButton");
let $listaProductos = document.getElementById("productList");

// Función para agregar un producto
$botonAgregarProducto.addEventListener("click", () => {
  
  let nombre = $nombreProducto.value;
  let precio = parseFloat($precioProducto.value);
  let categoria = $categoriaProducto.value;

  // Validar campos
  if ( nombre === "" || isNaN(precio) || categoria === "") {
    alertErrorCampos();
    return;
  }

  const productoDuplicado = productos.some(
    (e) =>

      e.nombre === nombre &&
      e.precio === precio &&
      e.categoria === categoria
  );

  if (productoDuplicado) {
    alertErrorDuplicados()
    return;
  }

 

  const nombreDuplicado = productos.some((e) => e.nombre === nombre);
  if (nombreDuplicado) {
    Swal.fire({
      title: "⚠️ El nombre del producto ya está registrado.",
      icon: "warning",
      position: "center",
      showConfirmButton: true,
    });
    return;
  }

  const nuevoProducto = {
   
    nombre: nombre,
    precio: precio,
    categoria: categoria,
  };

  productos.push(nuevoProducto);
  mostrarProductos();
  limpiarCamposProducto();

  Swal.fire({
    title: "¡Producto registrado exitosamente!",
    icon: "success",
    position: "center",
    showConfirmButton: true,
  });
});

function mostrarProductos() {
  const predefinidos = Object.values(productosPredefinidos);
  const todosLosProductos = predefinidos.concat(productos);

  $listaProductos.innerHTML = "";
  todosLosProductos.forEach((prod) => {
    $listaProductos.innerHTML += `<li>
      Código ${prod.nombre} - $${prod.precio} (${prod.categoria})
      <button class="deleteProduct" data-id="${prod.nombre}">Eliminar</button>
    </li>`;
  });

  // Agregar eventos a botones de eliminar
  document.querySelectorAll(".deleteProduct").forEach((button) => {
    button.addEventListener("click", (e) => {
      const nombreDuplicado = e.target.getAttribute("data-nombre");
      eliminarProducto(nombreDuplicado);
    });
  });
}

function eliminarProducto(nombre) {
  productos = productos.filter((prod) => prod.nombre!== nombre);

  mostrarProductos();

  Swal.fire({
    title: "Producto eliminado correctamente",
    icon: "success",
    position: "center",
    showConfirmButton: true,
  });
}

// Limpiar campos del formulario de productos
function limpiarCamposProducto() {
  $idProducto.value = "";
  $nombreProducto.value = "";
  $precioProducto.value = "";
  $categoriaProducto.value = "";
}

  