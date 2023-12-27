async function loadMore(){

    const response = await fetch(`/elementos`);

    const newelementos = await response.text();
  
    const elementosDiv = document.getElementById("elementos");

    elementosDiv.innerHTML += newelementos;

    loadMoreRequests++;
}