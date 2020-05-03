var nombre = "German";
var altura = 1.8;
var concatenacion = nombre + " " + altura ;

//document.write(`<p> Mi nombre es: ${ nombre } </p>`);
var datos = document.getElementById("datos");
datos.innerHTML = concatenacion;

if (altura >= 1.8) {
    datos.innerHTML += `<p>Eres alto</p>`;
} else {
    datos.innerHTML += `<p>Eres bajo</p>`;
}

for (let index = 2018; index < 2020; index++) {
    datos.innerHTML += `<h2>Estamos en ${ index } ` + index;
    
}

function mifuncion(primera) {
    var retorno = /*datos.innerHTML +=*/ `<h2>Hooooola función ${ primera } `
    return retorno
}

datos.innerHTML += mifuncion("Numero dos");

var nombres = ['German','Nina','Lara'];

for (let index = 0; index < 3; index++) {
    datos.innerHTML += `<h2>Mis hijas yo somos ${ nombres[index] } `;
    
}

var auto= {
    marca: "Chaevrolet",
    ano: 2010,
    color:"champagne"
}
datos.innerHTML += `<h1> ${this.auto.marca}</h1>` ;

var saludar = new Promise ((resolve, reject) => {
  
   setTimeout(() => {
        let saludo = "Hola que tal !";
        //saludo = false;
            if (saludo) {
                resolve(saludo);
            } else
            {
                reject("no se pudo");
            }
        },2000);
    }) ;

    saludar.then(resultado => {
        alert(resultado);
    })
    .catch (err => {
        alert(err);
    } );