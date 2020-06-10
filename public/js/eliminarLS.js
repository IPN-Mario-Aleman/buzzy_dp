const guardado = document.getElementById('servg');

//Listeners
cargarEventListeners();

function cargarEventListeners(){
    // Cuando se elimina un servicio de guardados
    guardado.addEventListener('click', eliminarServicio);
}


function eliminarServicio(e){
    e.preventDefault();
    let servic, servicId;
    if(e.target.classList.contains('EliminarCarrito') ){
        e.target.parentElement.parentElement.remove();
        servic = e.target.parentElement.parentElement;
        //console.log(servic);
        servicId = servic.querySelector('.EliminarCarrito').getAttribute('data-id');
        //console.log(servicId);
    }

    eliminarServicioLocalStorage(servicId);
}

// Eliminar servicio del local storage
function eliminarServicioLocalStorage(servicio){
    let serviciosLS;
    // obtenemos el arreglo de servicios
    serviciosLS = obtenerServiciosLocalStorage();
    // iteramos comparando el ID del servicio con los del LS
    serviciosLS.forEach(function(servicioLS, index){
        if(servicioLS.id === servicio){
            serviciosLS.splice(index, 1);
        }
    });
    // Añadimos el arreglo actual
    localStorage.setItem('servicios', JSON.stringify(serviciosLS));
}


