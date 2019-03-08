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
            <li class="card-rest">${reference.name}
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

// SECCION MAP

function initMap(){
    var options ={
        zoom:8,
        center: {lat:19.4978,lng:-99.1269}
    }

    var map = new
    google.maps.Map(document.getElementById('map'),options);

    addMarker({
        coords:{lat:19.440057053713137,lng:-99.12704709742486},
        content: '<p>Barajas, Bahena and Kano</p>'

    });

// add marker function
    function addMarker(props){
        var marker = new google.maps.Marker({
            position:props.coords,
            map:map,
        });
        if(props.content){
            var infoWindow = new google.maps.InfoWindow({
            content: props.content
            });
            marker.addListener('click', function(){
                infoWindow.open(map,marker);
            });
        }
    }
}
