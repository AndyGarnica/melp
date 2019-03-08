// Querys del DOM
const list = document.querySelector('.list');

// url de la API Datos de Restaurantes
const apiUrlRest = 'https://s3-us-west-2.amazonaws.com/lgoveabucket/data_melp.json';

fetch(apiUrlRest)
    .then(function(response){
        return response.json();
    })


    .then(function(references){
        console.log(references);
        printElements(references);
    })

    .catch(function(error){
        console.log(error)
    })

function printElements(references) {
    for(let reference of references) {
        list.innerHTML += `
            <li class="list-rest">${reference.name}
                <span>${reference.rating}</span>
                <a>${reference.contact.site}</a>
                <a>${reference.contact.email}</a>
                <span>${reference.contact.phone}</span>
                <p>${reference.address.street}</p>
                <p>${reference.address.state}</p>
            </li>
        `
    }
}
