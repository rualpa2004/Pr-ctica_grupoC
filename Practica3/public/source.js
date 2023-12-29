async function loadMore(){

    const response = await fetch(`/elementos`);

    const newelementos = await response.text();
  
    const elementosDiv = document.getElementById("elementos");

    elementosDiv.innerHTML += newelementos;

    loadMoreRequests++;
}

async function findElementName() {

    let usernameInput = document.getElementById('elementName');

    let name = usernameInput.value;

    const response = await fetch(`/availableElementName?elementName=${name}`);

    const responseObj = await response.json();

    let message = responseObj.available? 
        '<p>Disponible</p>':
        '<p>No disponible</p>';

    const messageDiv = document.getElementById('message');
    messageDiv.innerHTML = message;

}