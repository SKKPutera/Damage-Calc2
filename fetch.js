var at = ""
var bsthp1 = 0
var bstatk1 = 0
var bstdef1 = 0
var bsthp2 = 0
var bstatk2 = 0
var bstdef2 = 0
var bstspatk1 = 0
var bstspdef1 = 0
var bstspatk2 = 0
var bstspdef2 = 0


function fetchnatures() {
  fetch('https://pokeapi.co/api/v2/nature?limit=30')
    .then(response => response.json())
    .then(function (allnatures) {
      allnatures.results.forEach(function (nature) {
        fetchNatureData(nature);

      })
      select = document.getElementById("nature1")
      for (var i = 0; i < allnatures.results.length; i++) {
        at = allnatures.results[i].name;
        var option = document.createElement("option");
        option.textContent = at;
        select.appendChild(option)
      }
      select = document.getElementById("nature2")
      for (var i = 0; i < allnatures.results.length; i++) {
        at = allnatures.results[i].name;
        var option = document.createElement("option");
        option.textContent = at;
        select.appendChild(option)
      }
    })

}

function fetchNatureData(pokemon) {

}


function fetchKantoPokemon() {
  fetch('https://pokeapi.co/api/v2/pokemon?limit=151')
    .then(response => response.json())
    .then(function (allpokemon) {
      allpokemon.results.forEach(function (pokemon) {
        fetchPokemonData(pokemon);

      })
      select = document.getElementById("Pkmn1")
      for (var i = 0; i < allpokemon.results.length; i++) {
        at = allpokemon.results[i].name;
        var option = document.createElement("option");
        option.textContent = at;
        select.appendChild(option)
      }
      select = document.getElementById("Pkmn2")
      for (var i = 0; i < allpokemon.results.length; i++) {
        at = allpokemon.results[i].name;
        var option = document.createElement("option");
        option.textContent = at;
        select.appendChild(option)
      }
    })

}

function fetchPokemonData(pokemon) {

}







