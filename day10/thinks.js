
const imagen = document.querySelector('img');
const name = document.querySelector('#name');
const lastName = document.querySelector('#lastName');
const other = document.querySelector('#otherInfo');
const email = document.querySelector('#email');
const city = document.querySelector('#city');

const but = document.querySelector('button');
var url = 'https://randomuser.me/api/'

fetchCall();

but.addEventListener('click', function(){
    fetchCall();
});

function fetchCall(){
    fetch(url)
    .then(handleErrors)
    .then(parseJSON)
    .then(updateProfile)
    .catch(alertError);

    function handleErrors(request){
        if(request.status !== 200){
            throw Error('A SUPER FATAL ERROR :)');
        }
        return request;
    }

    function parseJSON(response){
        let data = response.json();
        return data;
    }

    function updateProfile(dataReady){
        imagen.setAttribute("src", dataReady.results[0].picture.medium);
        name.textContent = dataReady.results[0].name.first;
        lastName.textContent = dataReady.results[0].name.last;
        other.textContent = dataReady.results[0].login.username;
        email.textContent = dataReady.results[0].email;
        city.textContent = dataReady.results[0].location.city;
    }

    function alertError(responseError){
        alert('An error has occur ' + responseError);
    }

}