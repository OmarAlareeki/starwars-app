// declaring main components for this fun
const urlFilms = "https://swapi.dev/api/films/";
const ul = document.createElement("ul");
const container = document.getElementById("main-container");
// creating async fun to fetch data from the url / api
async function getDataFilm() {
  const res = await fetch(urlFilms);
  const data = await res.json();
  // iterate over every element in the array for char names + descrip
  for(var i = 0; i < data.results.length; i++) {
    const li = document.createElement("li");
    //const p = document.createELement("p");
    // creating alias to shortcut results
    let currentComponent = data.results[i];
    let filmTitle = currentComponent.title;
    let filmOpenning = currentComponent.opening_crawl;
    console.log(currentComponent.characters)
        li.innerHTML = filmTitle + "  -  " + filmOpenning;
       // for(let x = 0; x < currentComponent.characters.length; x++) {
       //  let filmCharacters = currentComponent.characters[x];
       //   p.innerHTML = filmCharacters;
       //  }
       // styling list components
       li.setAttribute('style', 'display: block;'+
        'border:2px solid #cfa9a978;'+
        'padding:15px;'+
        'width:30%;'+
        'text-align:center;'+
        'margin:5px;'+
        'fontSize:20px');
       // inserting the text component p to li
       //li.appendChild(p);
       // inserting li component in the main table ul
       ul.appendChild(li);
    }
    // inserting the whole ul table to the main container
    container.appendChild(ul);
}
getDataFilm()

// fetch("https://www.thecocktaildb.com/api/json/v1/1/random.php")
//   .then((response) => {
//     if (response.ok) {
//       return response.json();
//     } else {
//       throw new Error("NETWORK RESPONSE ERROR");
//     }
//   })
//   .then(data => {
//     getData(data)
//   })
//   .catch((error) => console.error("FETCH ERROR:", error));
