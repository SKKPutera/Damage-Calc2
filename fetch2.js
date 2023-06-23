document.addEventListener("DOMContentLoaded", () => {

    let generateBtn = document.querySelector('#generate-pokemon2');
    generateBtn.addEventListener('click', renderEverything)
  
  })
  
  function renderEverything2() {
    let allPokemonContainer = document.querySelector('#poke-container')
    allPokemonContainer.innerText = "";
    fetchKantoPokemon2();
  
  }
  
  
  
  
  function fetchKantoPokemon2() {
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