let container = document.querySelector(".container");

function searchRecipes(){
fetch("https://recipepuppyproxy.herokuapp.com/api/?i=onions")
  
  .then(
  
    function(response) {
  
      if (response.status !== 200) {
        console.log(response.status);
        return;
      }
      response.json().then(function(data) {
       	console.log(data);
        for(i=0;i<data.results.length;i++){
        	console.log(data.results[i].title);
        container.innerHTML += `<div class = "box"><img src = ${data.results[i].thumbnail}> <h1>${data.results[i].title}</h1><p>${data.results[i].ingredients}</p> <a href = "${data.results[i].href}">Link</a></div>`;
    }
      });
    }
  )
  .catch(function(err) {
    console.log("Fetch Error :-S", err);
  });
}

searchRecipes();

