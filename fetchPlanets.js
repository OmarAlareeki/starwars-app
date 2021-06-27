const url = "https://swapi.dev/api/planets/";
const ul = document.createElement("ul");
const planetsDiv = document.getElementById("planetsDiv");
const spinner = document.getElementById("spinner");

// creating async fun to fetch data from the url / api
async function getData() {
  spinner.removeAttribute("hidden")
  const res = await fetch(url);
  const data = await res.json();
  spinner.setAttribute("hidden", "")

  // iterate over every element in the array for char names + descrip
  for(var i = 0; i < data.results.length; i++) {
    const p = document.createElement("p");
    const li = document.createElement("li");
    // creating alias to shortcut results
    let currentComponent = data.results[i];
    let planetName = currentComponent.name;
    let planetPopulation = currentComponent.population;
    let planetClimate = currentComponent.climate;

    li.innerHTML = planetName + "<BR>";
    p.innerHTML = "Population : " + planetPopulation + "<BR>" + "Climate : " + planetClimate;

       // styling list components
       li.setAttribute('style', 'display: block;'+
        'border:2px solid #f8f8f8;'+
        'padding:15px;'+
        'width:40%;'+
        'margin:5px;'+
        'font-Size:20px');
       p.setAttribute('style','font-Size:14px;margin-top:10px')
         // inserting li component in the main table ul
       ul.appendChild(li);
       li.appendChild(p)
    }
    // inserting the whole ul table to the main container
    planetsDiv.appendChild(ul)
}
getData()
