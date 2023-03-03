document.querySelector('#dolar').addEventListener('click', function(){
    obtenerDatos('dolar');
});
document.querySelector('#uf').addEventListener('click', function(){
    obtenerDatos('uf');
});

function obtenerDatos(valor){
    let url = `https://mindicador.cl/api/${valor}`;
    const xhttp = new XMLHttpRequest();
    xhttp.open('GET', url, true);
    xhttp.send();
    xhttp.onreadystatechange = function(){
        if(this.readyState == 4 && this.status == 200){
            let datos = JSON.parse(this.responseText);
          //  console.log(datos.serie); 
            let resul = document.querySelector('#resultado');
            resul.innerHTML = '';
            let i = 0;
            for(let item of datos.serie){
                i++;
                resul.innerHTML += `
                <li>${item.fecha.substr(0, 10)} || $ ${item.valor}</li>`
                if(i>9){
                    break;
                }
            }
        }
    }
}