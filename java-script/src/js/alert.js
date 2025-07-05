// Install alerts to enhance interactivity
import Swal from "sweetalert2";

const toast = Swal.mixin({
    didOpen: (toast) => {
      toast.onmouseenter = Swal.stopTimer;
      toast.onmouseleave = Swal.resumeTimer;
    }
  });

// Export this function to gestion-api.js to display a message
export function alertNuevoProductos(message){
    Swal.fire({
      title: "Your product was successfully registered",
      icon: "success",
      draggable: true
      });
  }
  
export function alertErrorCampos(message){
    Swal.fire({
      title: "Please complete all fields",
      icon: "error",
      draggable: true
      });
  }

export function alertErrorNombreDuplicado(message){
    Swal.fire({
      title: "The product name is already registered",
      icon: "error",
      draggable: true
      });
  }

export function alertEliminarProducto(message){
    Swal.fire({
      title: "Your product was successfully deleted",
      icon: "success",
      draggable: true
      });
  }

export function alertPrecioMayorCero(message){
    Swal.fire({
      title: "The product price must be greater than zero",
      icon: "error",
      draggable: true
      });
  }

// Clear product form fields
export function limpiarCamposProducto() {
    $nombreProducto.value = "";
    $precioProducto.value = "";
    $categoriaProducto.value = "";
  }


