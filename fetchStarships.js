const url = "https://swapi.dev/api/starships/";
const ul = document.createElement("ul");
const starshipsDiv = document.getElementById("starshipsDiv");
const spinner = document.getElementById("spinner");

// creating async fun to fetch data from the url / api
async function getData() {
  spinner.removeAttribute("hidden")
  const res = await fetch(url);
  const data = await res.json();
  spinner.setAttribute("hidden", "")

  // iterate over every element in the array for char names + descrip
  for(var i = 0; i < data.results.length; i++) {
    const li = document.createElement("li");
    const p = document.createElement("p");
    // creating alias to shortcut results
    let currentComponent = data.results[i];
    let starshipsName = currentComponent.name;
    let starshipsDescrip = currentComponent.model;
    let starshipsCapacity = currentComponent.passengers;

    li.innerHTML = starshipsName + "<BR>";
    p.innerHTML = "Model : " + starshipsDescrip + "<BR>" + "Passangers : "  + starshipsCapacity;
       // styling list components
       li.setAttribute('style', 'display: block;border:2px solid #f8f8f8;padding:15px;'+
        'width:40%;margin:5px;font-Size:20px');
       p.setAttribute('style','font-Size:14px;margin-top:10px')
         // inserting li component in the main table ul
       ul.appendChild(li);
       li.appendChild(p)
    }
    // inserting the whole ul table to the main container
    starshipsDiv.appendChild(ul)
}
getData()
