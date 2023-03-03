//console.log('correcto');

document.querySelector('#botonazo').addEventListener('click', traerDatos);

function traerDatos(){
   // console.log('funcion5 activada')

   const xhttp = new XMLHttpRequest();

    xhttp.open('GET', 'catalogo.json', true);

    xhttp.send();

    xhttp.onreadystatechange = function(){

        if(this.readyState == 4 && this.status == 200){
            //console.log(this.responseText)
            let datos = JSON.parse(this.responseText);
           // console.log(datos);
           let resp = document.querySelector('#resp');
           resp.innerHTML = '';
            for(let item of datos){
                //console.log(item.artista);
                resp.innerHTML += `
                <tr>
                    <th>${item.titulo}</th>
                    <th>${item.artista}</th>
                </tr>
                `
            }
        }
    }
}