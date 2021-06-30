// IFFE

function printName () {
  console.log("Hello")
}

printName()

// // declaring main components for this fun
// let url         = "https://swapi.dev/api/";
// const ul        = document.createElement("ul");
// const dataDiv   = document.getElementById("dataDiv");
// const spinner   = document.getElementById("spinner");
// var path        = window.location.pathname;
// var page        = path.split("/").pop();

// // creating async fun to fetch data from the url / api
// async function getData() {
//   spinner.removeAttribute('hidden');
//   const res = await fetch(url + "/people/");
//   const data = await res.json();
//   spinner.setAttribute('hidden', '');

//   // iterate over every element in the array for char names + descrip
//   for(var i = 0; i < data.results.length; i++) {
//     const li = document.createElement("li");
//     const p = document.createElement("p");
//     // creating alias to shortcut results
//     let currentComponent = data.results[i];

//     if(page === "home.html") {
//       console.log("/This is working")
//     } else if(page === "characters.html") {

//     } else if (page === "films.html") {

//     } else if (page === "starships.html") {

//     } else if (page === "species.html") {

//     } else {

//     }
//     let charName = currentComponent.name;
//     let charDescrip = "Height: " + currentComponent.height + ", Weight: " + currentComponent.mass;
//     let charBirthYear = "Birth Year : "+ currentComponent.birth_year;
//       li.innerHTML = charName + "<BR>";
//       p.innerHTML = charDescrip + "<BR>" + charBirthYear;

//        // styling list components
//        p.setAttribute('style','font-Size:14px;margin-top:10px')
//        li.setAttribute('style', 'display: block;border:2px solid #f8f8f8;padding:15px;'+
//         'width:40%;margin:5px;font-Size:20px;');
//        // inserting li component in the main table ul
//        ul.appendChild(li);
//        li.appendChild(p)
//     }
//     // inserting the whole ul table to the main container
//     dataDiv.appendChild(ul)
// }
// getData()
