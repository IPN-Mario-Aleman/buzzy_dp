//Variables
const service = document.getElementById('services');
// const guardado = document.getElementById('servg');
const listaServicios = document.querySelector('.container-post #servg');
const eliminarTodos = document.querySelector('.eliminarTodo');

//Listeners
cargarEventListeners();

function cargarEventListeners(){

    // Al cargar el documento cargar el local storage
    document.addEventListener('DOMContentLoaded', leerLocalStorage);

    /* Cuando se elimina un servicio de guardados
    guardado.addEventListener('click', eliminarServicio);*/

    // Agregar servicio a guardado
    service.addEventListener('click', comprarCurso);

    

    // Eliminar todos los servicios guardados
    eliminarTodos.addEventListener('click', eliminarS);


}

//Funciones
//funcion para añadir un servicio al carro
function comprarCurso(e){
    e.preventDefault();
    //delegation para agregar-a-guardado
    if (e.target.classList.contains('agregarCarrito')){
        const serv = e.target.parentElement.parentElement;
        //Enviamos el servicio seleccionado para tomar sus datos
        leerDatosServicio(serv);
    }
}
// Lee los datos del servicio
function leerDatosServicio(serv){
    const infoServicio = {
        imagen: serv.querySelector('img').src,
        username: serv.querySelector('p').textContent,
        titulo: serv.querySelector('h2').textContent,
        desc: serv.querySelector('span').textContent,
        precio: serv.querySelector('.ctn-tag li').textContent,
        rate: serv.querySelector('.ctn-tag .rate').textContent,
        id: serv.querySelector('.agregarCarrito').getAttribute('data-id')
    }

    insertarCarrito(infoServicio);
}

function insertarCarrito(serv){
    /*const row = document.createElement('div');
    row.setAttribute("class", "post");
    row.setAttribute("data-category", "1001");
    row.innerHTML = `
            <div class="ctn-img">
              <img src="${serv.imagen}" alt="">
            </div>
            <p class="usernamepub">${serv.username}</p>
            <h2> ${serv.titulo} </h2>
            <span> ${serv.desc}</span>
            <ul class="ctn-tag">
              <li> ${serv.precio} </li>
              <li class="rate">4.8 
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1792 1792" width="15" height="15"><path fill="currentColor" d="M1728 647q0 22-26 48l-363 354 86 500q1 7 1 20 0 21-10.5 35.5t-30.5 14.5q-19 0-40-12l-449-236-449 236q-22 12-40 12-21 0-31.5-14.5t-10.5-35.5q0-6 2-20l86-500-364-354q-25-27-25-48 0-37 56-46l502-73 225-455q19-41 49-41t49 41l225 455 502 73q56 9 56 46z"></path></svg>  
              </li>
            </ul> 
            <a id="btn" href="#">
              <button class="LeerMas"> Leer m&aacute;s </button>
            </a>
            <a id="btn" class="carrito" href="#">
              <button class="EliminarCarrito" data-id="${serv.id}"> Eliminar </button>
            </a>

    `;
    listaServicios.appendChild(row);*/
    guardarServicioLocalStorage(serv);

}


/*function eliminarServicio(e){
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
}*/

//Elimina todos los servicios existentes
function eliminarS(e){
    //listaServicios.innerHTML = '';
    while(listaServicios.firstChild){
        listaServicios.removeChild(listaServicios.firstChild);
    }
    //vaciar localstorage
    vaciarLocalStorage();
    return false;
}

// Almacena servicios al local storage
function guardarServicioLocalStorage(serv){
    let servicios;
    // Toma el valor de un arreglo con datos de LS o vacio
    servicios = obtenerServiciosLocalStorage();
    
    // El servicio seleccionado se agrega al local storage
    servicios.push(serv);

    localStorage.setItem('servicios', JSON.stringify(servicios));
}


// Comprueba que haya elementos en el local storage
function obtenerServiciosLocalStorage(){
    let serviciosLS;

    //comprobamos si hay algo en el local storage
    if(localStorage.getItem('servicios') === null){
        serviciosLS = [];
    }else{
        serviciosLS = JSON.parse( localStorage.getItem('servicios') );
    }
    return serviciosLS;
}

// Imprime los servicios del local storage
function leerLocalStorage() {
    let serviciosS;

    serviciosS = obtenerServiciosLocalStorage();

    serviciosS.forEach(function(serv) {
        //construir template    
        const row = document.createElement('div');
        row.setAttribute("class", "post");
        row.setAttribute("data-category", "1001");
        row.innerHTML = `
                <div class="ctn-img">
                <img src="${serv.imagen}" alt="">
                </div>
                <p class="usernamepub">${serv.username}</p>
                <h2> ${serv.titulo} </h2>
                <span> ${serv.desc}</span>
                <ul class="ctn-tag">
                <li> ${serv.precio} </li>
                <li class="rate">4.8 
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1792 1792" width="15" height="15"><path fill="currentColor" d="M1728 647q0 22-26 48l-363 354 86 500q1 7 1 20 0 21-10.5 35.5t-30.5 14.5q-19 0-40-12l-449-236-449 236q-22 12-40 12-21 0-31.5-14.5t-10.5-35.5q0-6 2-20l86-500-364-354q-25-27-25-48 0-37 56-46l502-73 225-455q19-41 49-41t49 41l225 455 502 73q56 9 56 46z"></path></svg>  
                </li>
                </ul> 
                <a id="btn" href="#">
                <button class="LeerMas"> Leer m&aacute;s </button>
                </a>
                <a id="btn" class="carrito" href="#" >
                <button class="EliminarCarrito" data-id="${serv.id}"> Eliminar </button>
                </a>
        `;
        listaServicios.appendChild(row);
    });
}

// Eliminar servicio del local storage
/*function eliminarServicioLocalStorage(servicio){
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
}*/

function vaciarLocalStorage(){
    localStorage.clear();
}