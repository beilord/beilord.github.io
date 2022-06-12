const url = 'https://jsonplaceholder.typicode.com/users';// url de la API
const dataSheet = document.getElementById('dataSheet'); // container
let objectCount = 0; // variable de iteracion para enumerar los <p>
let barValue =1;
let cum;
const updateBarValue = (newValue)=>{
    barValue = newValue;
}

const request = ()=>{
    fetch(url) // funcion que genera la request (si no se indica como segundo parametro se elige el verbo GET)
    .then(function(res){res.blob()}) // genera una promesa con la response de la funcion anterior que luego se paresea con json()
    .then(function(data){return data})
    .catch(err => console.log("Error")); // muestra un error en caso de fallo con la request
}

console.log(request())