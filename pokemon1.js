var hp1 = 0;
var atk1 = 0;
var def1 = 0;
var spatk1 = 0;
var spdef1 = 0;
var level1 = 0;
var stat = 0;
var nature11 = 0;
var displaytext = 0;
var displaynature = 0;
var displaymove = 0;
var selectedmove = 0;
var displaymove2 = 0;
var selectedmove2 = 0;
var evhp1 = 0;
var evatk1 = 0;
var ntratk1 = 1;
var ivdef1 = 0;
var evdef1 = 0;
var ntrdef1 = 1;
var ivspatk1 = 0;
var evspatk1 = 0;
var ntrspatk1 = 1;
var ivspdef1 = 0;
var evspdef1 = 0;
var ntrspdef1 = 1;
function ddlselect() {
    var evhp1 = parseInt(document.getElementById("evhp1").value);
    var evatk1 = parseInt(document.getElementById("evatk1").value);
    var evdef1 = parseInt(document.getElementById("evdef1").value);
    var evspatk1 = parseInt(document.getElementById("evspatk1").value);
    var evspdef1 = parseInt(document.getElementById("evspdef1").value);
    ntratk1 = 1;
    ntrdef1 = 1;
    ntrspatk1 = 1;
    ntrspdef1 = 1;

    if (evhp1 + evatk1 + evdef1 + evspatk1 + evspdef1 > 510) {
        return
    }
    var d = document.getElementById("Pkmn1");
    displaytext = d.options[d.selectedIndex].value;
    stat = displaytext;

    var n = document.getElementById("nature1");
    displaynature = n.options[n.selectedIndex].value;
    nature11 = displaynature;

    document.getElementById("txtvalue").value = d.options[d.selectedIndex].text;
    document.getElementById("stats").value = "";
    document.getElementById("hp").value = "";
    document.getElementById("atk").value = "";
    document.getElementById("def").value = "";
    document.getElementById("spatk").value = "";
    document.getElementById("spdef").value = "";
    level1 = parseInt(document.getElementById("lvl1").value);

    document.getElementById('Move1').options.length = 0;
    fetchAllPokemon()
    fetchAllNature()

    //fetch, then do something
    document.getElementById("stats").value = stat + "'s stats";
    var ivhp1 = parseInt(document.getElementById("ivhp1").value);

    hp1 = (((2 * bsthp1) + (evhp1 / 4) + 100 + ivhp1) * level1 / 100) + 10;
    document.getElementById("hp").value = hp1;
    var ivatk1 = parseInt(document.getElementById("ivatk1").value);
    atk1 = Math.floor((((ivatk1 + 2 * bstatk1 + (evatk1 / 4)) * level1 / 100) + 5) * ntratk1);
    document.getElementById("atk").value = atk1;
    var ivdef1 = parseInt(document.getElementById("ivdef1").value);
    def1 = Math.floor((((ivdef1 + 2 * bstdef1 + (evdef1 / 4)) * level1 / 100) + 5) * ntrdef1);
    document.getElementById("def").value = def1;
    var ivspatk1 = parseInt(document.getElementById("ivspatk1").value);
    spatk1 = Math.floor((((ivspatk1 + 2 * bstspatk1 + (evspatk1 / 4)) * level1 / 100) + 5) * ntrspatk1);
    document.getElementById("spatk").value = spatk1;
    var ivspdef1 = parseInt(document.getElementById("ivspdef1").value);
    spdef1 = Math.floor((((ivspdef1 + 2 * bstspdef1 + (evspdef1 / 4)) * level1 / 100) + 5) * ntrspdef1);
    document.getElementById("spdef").value = spdef1;

}
function fetchAllNature() {
    fetch('https://pokeapi.co/api/v2/nature?limit=30')
        .then(response => response.json())
        .then(function (allnature) {
            allnature.results.forEach(function (natures) {
                fetchNatureFull(natures)
            })
        })
}
function fetchNatureFull(natures) {
    let weblink = natures.url
    fetch(weblink)
        .then(response => response.json())
        .then(function (natureDatas) {
            renderNatures(natureDatas)
        })
}
function renderNatures(natureDatas) {
    if (natureDatas.name == nature11) {
        if(natureDatas.decreased_stat.length>0){
        if (natureDatas.decreased_stat.name == "attack") {
            ntratk1 = 0.9
        } else if (natureDatas.decreased_stat.name == "special-attack") {
            ntrspatk1 = 0.9
        } else if (natureDatas.decreased_stat.name == "defense") {
            ntrdef1 = 0.9
        } else if (natureDatas.decreased_stat.name == "special-defense") {
            ntrspdef1 = 0.9
        }}
        if(b=natureDatas.increased_stat.length>0){
        if (natureDatas.increased_stat.name == "attack") {
            ntratk1 = 1.1
        } else if (natureDatas.increased_stat.name == "defense") {
            ntrdef1 = 1.1
        } else if (natureDatas.increased_stat.name == "special-attack") {
            ntrspatk1 = 1.1
        } else if (natureDatas.increased_stat.name == "special-defense") {
            ntrspdef1 = 1.1
        }
    }
}}
function fetchAllPokemon() {
    fetch('https://pokeapi.co/api/v2/pokemon?limit=151')
        .then(response => response.json())
        .then(function (allpokemons) {
            allpokemons.results.forEach(function (pokemons) {
                fetchPokemonFull(pokemons);

            })
        })
}
function fetchPokemonFull(pokemons) {
    let urls = pokemons.url
    fetch(urls)
        .then(response => response.json())
        .then(function (pokeDatas) {
            renderPokemons2(pokeDatas)
        })
}
function renderPokemons2(pokeDatas) {
    if (stat == pokeDatas.name) {
        bsthp1 = pokeDatas.stats[0].base_stat;
        bstatk1 = pokeDatas.stats[1].base_stat;
        bstdef1 = pokeDatas.stats[2].base_stat;
        bstspatk1 = pokeDatas.stats[3].base_stat;
        bstspdef1 = pokeDatas.stats[4].base_stat;
        poketype1 = pokeDatas.types[0].type.name;
        if (pokeDatas.types.length > 1) {
            poketype2 = pokeDatas.types[1].type.name;
        }

        document.getElementById("img1").src = pokeDatas.sprites.back_default;
        select = document.getElementById("Move1")
        for (var i = 0; i < pokeDatas.moves.length; i++) {
            at = pokeDatas.moves[i].move.name;
            var option = document.createElement("option");
            option.textContent = at;
            select.appendChild(option)
        }
    } else { }
}