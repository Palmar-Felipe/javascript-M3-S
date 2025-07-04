
import Swal from "sweetalert2";

const Toast = Swal.mixin({
  
    didOpen: (toast) => {
      toast.onmouseenter = Swal.stopTimer;
      toast.onmouseleave = Swal.resumeTimer;
    }
  });
  
  export function alertSucess(message){
        Swal.fire({
            title: "Drag me!",
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