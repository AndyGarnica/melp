// Querys  DOM
const list = document.querySelector('.list');

// url API Restaurants Dates
const apiUrlRest = 'https://s3-us-west-2.amazonaws.com/lgoveabucket/data_melp.json';

fetch(apiUrlRest)
    .then(function(response){
        return response.json();
    })


    .then(function(references){
        console.log(references);
        printElements(references);
        // drawMap(references)
    })

    .catch(function(error){
        console.log(error)
    })

function printElements(references) {
   
    for(let reference of references) {
        
        let starIcons = '';
        for(let stars = 0; stars < reference.rating; stars++){
            starIcons += '<i class="fas fa-star icons-js"></i>';

        }

        list.innerHTML += `
            <li class="card-rest sty-name">${reference.name} 
                <span class="sty-rating">${starIcons}</span>
                <a class="sty-site">${reference.contact.site}</a>
                <a class="sty-email">${reference.contact.email}</a>
                <span class="sty-phone">${reference.contact.phone}</span>
                <p class="sty-street">${reference.address.street}</p>
                <p class="sty-state">${reference.address.state}</p>
            </li>
        `
    }
};
// S E C C I O N   M A P 
function initMap(){
    var options ={
        zoom:8,
        center: {lat:19.4400,lng:-99.1270}
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
