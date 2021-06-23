// declaring main components for this fun
const urlCharachers = "https://swapi.dev/api/people/";
const urlFilms = "https://swapi.dev/api/films/";
const ul = document.createElement("ul");
const container = document.getElementById("main-container");
// creating async fun to fetch data from the url / api
async function getData() {
  const res = await fetch(urlCharachers);
  const data = await res.json();
   console.log(data.results)
  // iterate over every element in the array for char names + descrip
  for(var i = 0; i < data.results.length; i++) {
    const li = document.createElement("li");
    const p = document.createElement("p");
    // creating alias to shortcut results
    let currentComponent = data.results[i];
    let charName = currentComponent.name;
    let charDescrip = "Height: " + currentComponent.height + ", Weight: " + currentComponent.mass;
       li.innerHTML = charName;
       p.innerHTML = charDescrip;
       // styling list components
       li.setAttribute('style', 'display: block;'+
        'border:2px solid #cfa9a978;'+
        'padding:15px;'+
        'width:30%;'+
        'text-align:center;'+
        'margin:5px');
       // inserting the text component p to li
       li.appendChild(p)
       // inserting li component in the main table ul
       ul.appendChild(li);
    }
    // inserting the whole ul table to the main container
    container.appendChild(ul)
}
getData()

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
