//Javascript para al presionar el boton de las aplicaciones se abra la ventana correspondiente
function openModal(modalId) {
    document.getElementById(modalId).style.display = 'block';
  }
  
  function closeModal(modalId) {
    document.getElementById(modalId).style.display = 'none';
  }
  
  window.addEventListener('DOMContentLoaded', (event) => {
    let zIndexCounter = 0;

    // Selecciona todos los elementos modal
    let modals = document.querySelectorAll(".modal");

    modals.forEach((modal) => {
        modal.addEventListener('click', function(e) {
            // Aumenta el contador del z-index y asigna el nuevo z-index al elemento clickeado
            zIndexCounter++;
            this.style.zIndex = zIndexCounter;
        });
    });
});


  //Javascript para maximizar y minimizar la ventana modal

  function maximizeWindow(modalId) {
    var modal = document.getElementById(modalId);
    if (modal.classList.contains('maximized')) {
        // Si ya está maximizada, la restauramos a su tamaño original
        modal.classList.remove('maximized');
        modal.style.left = '';
        modal.style.top = '';
        modal.style.width = '';
        modal.style.height = '';
    } else {
        // De lo contrario, la maximizamos
        modal.classList.add('maximized');
        modal.style.left = '60px'; // Ajusta la posición izquierda para que coincida con el ancho del sidebar
        modal.style.top = '30px'; // Ajusta la posición superior para que coincida con la altura de la navbar
        modal.style.width = 'calc(100% - 60px)'; // Ajusta el ancho restando el ancho del sidebar
        modal.style.height = 'calc(100% - 30px)'; // Ajusta la altura restando la altura de la navbar 
    }
}


// Javascript para mover la ventana modal

let dragObj = null;
let xDiff = 0;
let yDiff = 0;

// Selecciona todas las barras superiores y añade el evento 'mousedown' a cada una de ellas
let topBars = document.querySelectorAll(".top-bar-ubuntu");

topBars.forEach((topBar) => {
    topBar.addEventListener('mousedown', function(e) {
        let modalId = this.dataset.modal;
        dragObj = document.getElementById(modalId);
        xDiff = e.pageX - dragObj.offsetLeft;
        yDiff = e.pageY - dragObj.offsetTop;
    });
});

document.addEventListener('mousemove', function(e) {
    if(dragObj == null || dragObj.classList.contains('maximized')) {
        // Si no se está arrastrando nada o el objeto que se está arrastrando está maximizado, simplemente retorna
        return;
    }
  
    let newLeft = e.pageX - xDiff;
    let newTop = e.pageY - yDiff;
  
    if(newLeft < 0) {
        newLeft = 0;
    }
  
    if(newTop < 0) {
        newTop = 0;
    }
  
    if(newLeft > document.body.clientWidth - dragObj.clientWidth) {
        newLeft = document.body.clientWidth - dragObj.clientWidth;
    }
  
    if(newTop > document.body.clientHeight - dragObj.clientHeight) {
        newTop = document.body.clientHeight - dragObj.clientHeight;
    }
  
    dragObj.style.left = newLeft + "px";
    dragObj.style.top = newTop + "px";
  });
  
  document.addEventListener('mouseup', function() {
      dragObj = null;
      xDiff = 0;
      yDiff = 0;
  });
  


// Javascript para la navbar superior y codigo para obtener la hora
// Función para actualizar el tiempo
function updateTime() {
    const date = new Date();
    let hours = date.getHours();
    let minutes = date.getMinutes();
    let ampm = hours >= 12 ? 'PM' : 'AM';
  
    hours = hours % 12;
    hours = hours ? hours : 12; // la hora '0' debería ser '12'
    minutes = minutes < 10 ? '0'+ minutes : minutes;
  
    const strTime = hours + ':' + minutes + ' ' + ampm;
    const strDate = date.toLocaleDateString('default', {month: 'long', day: 'numeric'});
  
    document.getElementById('date').innerHTML = strDate;
    document.getElementById('time').innerHTML = strTime;
  
    setTimeout(updateTime, 1000); // actualiza el tiempo cada segundo
  }
  
  // Llama a la función cuando la página carga
  window.onload = updateTime;
  