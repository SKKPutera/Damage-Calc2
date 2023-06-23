
var hp2 = 0;
var atk2 = 0;
var def2 = 0;
var spatk2 = 0;
var spdef2 = 0;
var level2 = 0;
var stat2 = 0;
var evhp2 = 0;
var evatk2 = 0;
var ntratk2 = 1;
var evdef2 = 0;
var ntrdef2 = 1;
var evspatk2 = 0;
var ntrspatk2 = 1;
var evspdef2 = 0;
var ntrspdef2 = 1;
var nature22 = 0;
var displaynature2 = 0;


function ddlselect2() {
    var e = document.getElementById("Pkmn2");
    var displaytext2 = e.options[e.selectedIndex].value;
    stat2 = displaytext2;

    var m = document.getElementById("nature2");
    displaynature2 = m.options[m.selectedIndex].value;
    nature22 = displaynature2;

    var evhp2 = parseInt(document.getElementById("evhp2").value);
    var evatk2 = parseInt(document.getElementById("evatk2").value);
    var evdef2 = parseInt(document.getElementById("evdef2").value);
    var evspatk2 = parseInt(document.getElementById("evspatk2").value);
    var evspdef2 = parseInt(document.getElementById("evspdef2").value);

    if (evhp2 + evatk2 + evdef2 + evspatk2 + evspdef2 > 510) {
        return
    }
    document.getElementById("txtvalue2").value = e.options[e.selectedIndex].text;
    document.getElementById("stats2").value = "";
    document.getElementById("hp2").value = "";
    document.getElementById("atk2").value = "";
    document.getElementById("def2").value = "";
    level2 = parseInt(document.getElementById("lvl2").value);

    document.getElementById('Move2').options.length = 0;
    fetchAllPokemon2()
    fetchAllNature2()
    //fetch, then do something
    document.getElementById("stats2").value = stat2 + "'s stats";
    var ivhp2 = parseInt(document.getElementById("ivhp2").value);

    hp2 = ((ivhp2 + 2 * bsthp2 + (evhp2 / 4) + 100) * level2 / 100) + 10;
    document.getElementById("hp2").value = Math.floor(hp2);
    var ivatk2 = parseInt(document.getElementById("ivatk2").value);

    atk2 = (((ivatk2 + 2 * bstatk2 + (evatk2 / 4)) * level2 / 100) + 5) * ntratk2;
    document.getElementById("atk2").value = Math.floor(atk2);
    var ivdef2 = parseInt(document.getElementById("ivdef2").value);

    def2 = (((ivdef2 + 2 * bstdef2 + (evdef2 / 4)) * level2 / 100) + 5) * ntrdef2;
    document.getElementById("def2").value = Math.floor(def2);
    var ivspatk2 = parseInt(document.getElementById("ivspatk2").value);

    spatk2 = (((ivspatk2 + 2 * bstspatk2 + (evspatk2 / 4)) * level2 / 100) + 5) * ntrspatk2;
    document.getElementById("spatk2").value = Math.floor(spatk2);
    var ivspdef2 = parseInt(document.getElementById("ivspdef2").value);
    spdef2 = (((ivspdef2 + 2 * bstspdef2 + (evspdef2 / 4)) * level2 / 100) + 5) * ntrspdef2;
    document.getElementById("spdef2").value = Math.floor(spdef2);


}
function fetchAllNature2() {
    fetch('https://pokeapi.co/api/v2/nature?limit=30')
        .then(response => response.json())
        .then(function (allnature2) {
            allnature2.results.forEach(function (natures2) {
                fetchNatureFull2(natures2)
            })
        })
}
function fetchNatureFull2(natures2) {
    let weblink2 = natures2.url
    fetch(weblink2)
        .then(response => response.json())
        .then(function (natureDatas2) {
            renderNatures2(natureDatas2)
        })
}
function renderNatures2(natureDatas2) {
    if (natureDatas2.name == nature22) {
        if (natureDatas2.decreased_stat.name == "attack") {
            ntratk2 = 0.9
        } else if (natureDatas2.decreased_stat.name == "special-attack") {
            ntrspatk2 = 0.9
        } else if (natureDatas2.decreased_stat.name == "defense") {
            ntrdef2 = 0.9
        } else if (natureDatas2.decreased_stat.name == "special-defense") {
            ntrspdef2 = 0.9
        }
        if (natureDatas2.increased_stat.name == "attack") {
            ntratk2 = 1.1
        } else if (natureDatas2.increased_stat.name == "defense") {
            ntrdef2 = 1.1
        } else if (natureDatas2.increased_stat.name == "special-attack") {
            ntrspatk2 = 1.1
        } else if (natureDatas2.increased_stat.name == "special-defense") {
            ntrspdef2 = 1.1
        }
    }
}
function fetchAllPokemon2() {
    fetch('https://pokeapi.co/api/v2/pokemon?limit=151')
        .then(response => response.json())
        .then(function (allpokemons) {
            allpokemons.results.forEach(function (pokemons2) {
                fetchPokemonFull2(pokemons2);
            })
        })
}
function fetchPokemonFull2(pokemons2) {
    let urls2 = pokemons2.url
    fetch(urls2)
        .then(response => response.json())
        .then(function (pokeDatas2) {
            renderPokemons(pokeDatas2)
        })
}
function renderPokemons(pokeDatas2) {
    if (stat2 == pokeDatas2.name) {
        bsthp2 = pokeDatas2.stats[0].base_stat;
        bstatk2 = pokeDatas2.stats[1].base_stat;
        bstdef2 = pokeDatas2.stats[2].base_stat;
        bstspatk2 = pokeDatas2.stats[3].base_stat;
        bstspdef2 = pokeDatas2.stats[4].base_stat;
        poketype3 = pokeDatas2.types[0].type.name;
        if (pokeDatas2.types.length > 1) {
            poketype4 = pokeDatas2.types[1].type.name;
        }
        document.getElementById("img2").src = pokeDatas2.sprites.front_default
        select = document.getElementById("Move2")
        for (var i = 0; i < pokeDatas2.moves.length; i++) {
            at = pokeDatas2.moves[i].move.name;
            var option = document.createElement("option");
            option.textContent = at;
            select.appendChild(option)
        }
    } else { }
}