//Javascript para al presionar el boton de las aplicaciones se abra la ventana correspondiente
function openModal(modalId) {
    document.getElementById(modalId).style.display = 'block';
  }
  
  function closeModal(modalId) {
    document.getElementById(modalId).style.display = 'none';
  }

  //Javascript para maximizar la ventana modal

  function maximizeWindow() {
    var navbarHeight = document.getElementById('navbar').offsetHeight;
    var taskbarHeight = document.getElementById('taskbar').offsetHeight;
    var windowHeight = window.innerHeight;
    var modalHeight = windowHeight - navbarHeight - taskbarHeight;

    document.querySelector('.modal').style.height = modalHeight + "px";
    document.querySelector('.modal').style.width = "100%";
    document.querySelector('.modal').style.top = navbarHeight + "px"; // Inicia debajo de la barra de navegación
    document.querySelector('.modal').style.left = "0px";
}

  

  ////////////////////////////////////////////////////////

// // Javascript para mover la ventana de la aplicación por la pantalla
// let activeModal = null;
// let isDragging = false;
// let offsetX = 0;
// let offsetY = 0;

// function addDragListeners(modal) {
//   const topBar = modal.querySelector('.top-bar-ubuntu');

//   topBar.addEventListener('mousedown', function (e) {
//       if (isMaximized) {  // If window is maximized, do not allow dragging
//           return;
//       }
//       activeModal = modal;
//       offsetX = e.clientX - activeModal.getBoundingClientRect().left;
//       offsetY = e.clientY - activeModal.getBoundingClientRect().top;
//       activeModal.style.transform = 'none'; // remove transformation while dragging
//       isDragging = true; // set dragging flag
//   });

//   topBar.addEventListener('mouseup', function () {
//       isDragging = false; // reset dragging flag
//       // set transform back to center the modal
//       activeModal.style.transform = 'translate(-50%, -50%)';
//   });
// }

// window.addEventListener('mousemove', function (e) {
//     if (!isDragging || isMaximized) {
//         return;
//     }

//     const newX = e.clientX - offsetX;
//     const newY = e.clientY - offsetY;

//     // Get the window's viewport
//     const viewportWidth = window.innerWidth;
//     const viewportHeight = window.innerHeight;

//     // Calculate the modal's new dimensions
//     const modalWidth = activeModal.offsetWidth;
//     const modalHeight = activeModal.offsetHeight;

//     // Limit the modal movement inside the window's viewport
//     activeModal.style.left = Math.min(Math.max(0, newX), viewportWidth - modalWidth) + 'px';
//     activeModal.style.top = Math.min(Math.max(0, newY), viewportHeight - modalHeight) + 'px';
// });

// // Make sure modals are draggable
// const modals = document.querySelectorAll('.modal');
// modals.forEach(addDragListeners);


// let originalModalSize = {width: '400px', height: '400px'};
// let isMaximized = false;

// function toggleWindow(modalId) {
//     const modal = document.getElementById(modalId);
//     if (isMaximized) {
//         // Window is maximized, so we minimize it
//         modal.style.width = originalModalSize.width;
//         modal.style.height = originalModalSize.height;
//         isMaximized = false;
//     } else {
//         // Window is minimized, so we maximize it
//         originalModalSize = {width: modal.style.width, height: modal.style.height};
//         modal.style.width = '80%';
//         modal.style.height = '80%';
//         isMaximized = true;
//     }
//     // Center the window each time
//     modal.style.left = '50%';
//     modal.style.top = '50%';
//     modal.style.transform = 'translate(-50%, -50%)';
// }

  
  
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
