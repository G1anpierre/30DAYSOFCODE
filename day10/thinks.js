
const cardElement = document.querySelector('.cardEl');
const but = document.querySelector('button');
var url = 'https://randomuser.me/api/'

fetchCall();

but.addEventListener('click', function(){
    fetchCall();
});

function fetchCall(){
    fetch(url)
    .then(handleErrors)
    .then(response => response.json())
    .then(updateProfile)
    .catch(alertError);
}

function handleErrors(request){
    if(request.status !== 200){
        throw Error('A SUPER FATAL ERROR :)');
    }
    return request;
}

function updateProfile(dataReady){
    // Data destructuring
    const { name, login, email, location, picture } = dataReady.results[0];
    // Template literal
    cardElement.innerHTML = `
        <img src="${picture.medium}" alt="profile Picture">
        <div class="data-info">
            <div>
                <h4>${name.first} ${name.last}</h4>
                <p class="otherInfo">${login.username}</p>
            </div>
            <div>
                <p>Email: ${email}</p>
                <p>City: ${location.city}</p>
            </div>
        </div>
    `;
}

function alertError(responseError){
    alert('An error has occur ' + responseError);
}