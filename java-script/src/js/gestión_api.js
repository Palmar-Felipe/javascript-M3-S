// Import axios function
import axios from "axios";

// Import alerts
import {
  alertEliminarProducto,
  alertErrorCampos,
  alertErrorNombreDuplicado,
  alertNuevoProductos,
  alertPrecioMayorCero,
  limpiarCamposProducto,
} from './alert'

let productos = [];
let productoEditandoId = null;
// Get elements from index.html
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
      console.error("Error fetching products", err);
    });
}

// Function to validate positive numbers and prevent duplicate names on click
$botonAgregarProducto.addEventListener("click", () => {
  let nombre = $nombreProducto.value;
  let precio = parseFloat($precioProducto.value);
  let categoria = $categoriaProducto.value;

  if (precio <= 0) {
    alertPrecioMayorCero();
    return;
  }

  if (nombre === " " || isNaN(precio) || categoria === " ") {
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
  // Function to edit a product
  if (productoEditandoId) {
    axios.put(`http://localhost:3000/productos/${productoEditandoId}`, nuevoProducto)
      .then(res => {
        const index = productos.findIndex(p => p.id === productoEditandoId);
        productos[index] = res.data; // Update the product in the array
        alertNuevoProductos();
        mostrarProductos(); // Update the product list in the interface
        limpiarCamposProducto();
        productoEditandoId = null;
      })
      .catch(() => {
        console.error("Error editing the product");
      });
  } else { // Function to create a new product
    axios.post("http://localhost:3000/productos", nuevoProducto)
      .then(res => {
        productos.push(res.data);
        alertNuevoProductos();
        mostrarProductos();
        limpiarCamposProducto();
      })
      .catch(() => {
        console.error("Error adding the product");
      });
  }
});

// Function to display delete and edit buttons for products
function mostrarProductos() {
  $listaProductos.innerHTML = "";
  productos.forEach((prod) => {
    $listaProductos.innerHTML += `<li>
      name ${prod.nombre} - $${prod.precio} (${prod.categoria})
      <button class="deleteProduct" data-id="${prod.id}">Delete</button>
      <button class="editProduct" data-id="${prod.id}">Edit</button>
    </li>`;
  });
  // If the user clicks delete, this function will be executed
  document.querySelectorAll(".deleteProduct").forEach((button) => {
    button.addEventListener("click", (e) => {
      const id = e.target.getAttribute("data-id");
      eliminarProducto(id);
    });
  });
  // If the user clicks edit, this function will be executed
  document.querySelectorAll(".editProduct").forEach((button) => {
    button.addEventListener("click", (e) => {
      const id = e.target.getAttribute("data-id");
      editarProducto(id);
    });
  });
}

// Function to find the identifier among products and delete the selected product
function eliminarProducto(id) {
  axios.delete(`http://localhost:3000/productos/${id}`)
    .then(() => {
      productos = productos.filter(p => p.id != id);
      alertEliminarProducto();
      mostrarProductos();
    })
    .catch(() => {
      console.error("Error deleting the product");
    });
}

// This function allows editing name, price, and category
function editarProducto(id) {
  const producto = productos.find(p => p.id == id);
  if (!producto) return;

  $nombreProducto.value = producto.nombre;
  $precioProducto.value = producto.precio;
  $categoriaProducto.value = producto.categoria;
  productoEditandoId = id;
}

window.addEventListener("DOMContentLoaded", () => obtenerProductos());





























