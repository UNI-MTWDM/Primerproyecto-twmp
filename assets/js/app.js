function sleep(ms, datos){
    return new Promise((resolve) => setTimeout(() => {
        resolve(datos.toUpperCase());
    }, ms))
}

async function upperCaseString(s){
    var resultado = await sleep(5000, s);
    return resultado;
}

window.onload = function() {
    let objVisitas = {
        id:1,
        acceso: ''
    };
    function cargarVisitas(){
        if(localStorage.getItem('visitas') != null){
            let datos = JSON.parse(localStorage.getItem('visitas'));
            datos.forEach(element => {
                let divNombre = document.createElement('div');
                let texttNombre = document.createTextNode(element.nombre);
                divNombre.appendChild(texttNombre);
                let boton = document.createElement('button');
                    boton.className = 'btn btn-danger';
                    boton.style.marginLeft = '40px';
                let textBoton = document.createTextNode('Borrar');
                    boton.addEventListener('click', event =>{
                        alert(element.nombre)
                    });
                boton.appendChild(textBoton);
                divNombre.appendChild(boton);
                document.body.appendChild(divNombre);
            });
        }
    }
    cargarVisitas();
};

upperCaseString('Hola, han pasado 5 sdegundos desde que entraste en el sitio y estas observando una funcion asincrona, por favor ve marcando las casillas de las actividades.')
    .then((value) => {
        console.log(value);
        alert(value);
    }
);
