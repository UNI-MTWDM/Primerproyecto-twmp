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
    
};

upperCaseString('Hola, han pasado 5 sdegundos desde que entraste en el sitio y estas observando una funcion asincrona, por favor ve marcando las casillas de las actividades.')
    .then((value) => {
        console.log(value);
        alert(value);
    }
);
