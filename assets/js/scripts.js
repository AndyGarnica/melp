const apiUrl = 'https://s3-us-west-2.amazonaws.com/lgoveabucket/data_melp.json';
const list = document.querySelector('.list');

fetch(apiUrl)
    .then(function(resp){
        return resp.json();
    })
    .then(function(contacts){
        console.log(contacts);
        printElements(contacts);
    })


function printElements(contacts) {
    for(let contact of contacts) {
        list.innerHTML += `
            <li>${contact.name}</li>
        `
    }
}