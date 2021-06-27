// declaring main components for this fun
const urlFilms = "https://swapi.dev/api/films/";
const ul = document.createElement("ul");
const filmsDiv = document.getElementById("filmsDiv");
const spinner = document.getElementById("spinner");

// creating async fun to fetch data from the url / api
async function getData() {
  spinner.removeAttribute('hidden');
  const res = await fetch(urlFilms);
  const data = await res.json();
   spinner.setAttribute('hidden', '');

  // iterate over every element in the array for char names + descrip
  for(var i = 0; i < data.results.length; i++) {
    const li = document.createElement("li");
    const p = document.createElement("p");
    // creating alias to shortcut results
    let currentComponent = data.results[i];
    let filmTitle = currentComponent.title;
    let filmOpenning = currentComponent.opening_crawl;
    let filmRelease = currentComponent.release_date;
    let filmCount = currentComponent.episode_id;
    let filmProducer = currentComponent.producer;
    //let filmDescrip = "Height: " + currentComponent.height + ", Weight: " + currentComponent.mass;
       li.innerHTML = filmTitle + "<BR>";
       p.innerHTML = filmOpenning + "<BR><BR>" +
       "Released : " + filmRelease + "<BR>" +
       "Episodes : " + filmCount + "<BR>" +
       "Producer : " + filmProducer;
       // styling list components
       li.setAttribute('style', 'display: block;'+
        'border:2px solid #f8f8f8;'+
        'padding:15px;'+
        'width:50%;'+
        'margin:5px;'+
        'font-Size:20px');
       p.setAttribute('style', 'font-Size:14px; margin-top:10px')
       // inserting li component in the main table ul
       ul.appendChild(li);
       li.appendChild(p)
    }
    // inserting the whole ul table to the main container
    filmsDiv.appendChild(ul)
}
getData()
