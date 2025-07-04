
import Swal from "sweetalert2";

const toast = Swal.mixin({
  
    didOpen: (toast) => {
      toast.onmouseenter = Swal.stopTimer;
      toast.onmouseleave = Swal.resumeTimer;
    }
  });
  
  export function alertNuevoProductos(message){
    Swal.fire({
      title: "Su producto se registro correctamente",
      icon: "success",
      draggable: true
      });

  
  }
  
  export function alertErrorCampos(message){
    Swal.fire({
      title: "por favor completa todos los capos",
      icon: "error",
      draggable: true
      });
  }

  export function alertErrorDuplicados(message){
    Swal.fire({
      title: "Su producto esta duplicado",
      icon: "error",
      draggable: true
      })
    }

  export function alertErrorNombreDuplicado(message){
    Swal.fire({
      title: "el nombre de su producto ya esta registrado",
      icon: "error",
      draggable: true
      })
    }

  export function alertEliminarProducto(message){
    Swal.fire({
      title: "Su procuto se elimino correctamente",
      icon: "success",
      draggable: true
      })
    }

  // Limpiar campos del formulario de productos
  export function limpiarCamposProducto() {
    $nombreProducto.value = "";
    $precioProducto.value = "";
    $categoriaProducto.value = "";
  }


