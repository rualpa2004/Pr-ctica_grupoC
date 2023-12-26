async function loadMore(){

    const response = await fetch(`/elementos`);

    const newelements = await response.text();
  
    const elementsDiv = document.getElementById("elementos");

    elementsDiv.innerHTML += newelements;

    loadMoreRequests++;
}