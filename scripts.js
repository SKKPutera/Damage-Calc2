var dc1 = 0
var bpm1 = 0
var mt1 = 0
var dc2 = 0
var bpm2 = 0
var mt2 = 0
var te1 = 1
var te2 = 1
var te3 = 1
var te4=1
var poketype1 = 0
var poketype2 = 0
var poketype3 = 0
var poketype4 = 0
var mulstab1 = 1
var mulstab2 = 1
function attack() {
    getallpokemon()
    getallpokemon2()
    getalltype()
    if (mt1 == poketype1 || mt1 == poketype2) {
        mulstab1 = 1.5
    }
    if (dc1 == "physical") {
        var dmg = Math.floor((((((2 * level1) / 5) + 2) * bpm1 * atk1 / def2 / 50) + 2) * mulstab1*te1*te2);

    } else if (dc1 == "special") {
        var dmg = Math.floor((((((2 * level1) / 5) + 2) * bpm1 * spatk1 / spdef2 / 50) + 2) * mulstab1*te1*te2);
    } else { dmg = "Status" }
    if (mt2 == poketype3 || mt2 == poketype4) {
        mulstab2 = 1.5
    }
    if (dc2 == "physical") {
        var dmg2 = Math.floor((((((2 * level2) / 5) + 2) * bpm2 * atk2 / def1 / 50) + 2) * mulstab2*te3*te4);

    } else if (dc2 == "special") {
        var dmg2 = Math.floor((((((2 * level2) / 5) + 2) * bpm2 * spatk2 / spdef1 / 50) + 2) * mulstab2*te3*te4);
    } else { dmg2 = "Status" }
    document.getElementById("amount").value = dmg;
    document.getElementById("amount2").value = dmg2;
}
function getalltype(){
    fetch('https://pokeapi.co/api/v2/type?limit=18')
    .then(response=>response.json())
    .then(function (allthetypes){
        allthetypes.results.forEach(function(type1){
            getthetypedata(type1);
        })
    })
}
function getthetypedata(type1){
    
}
function getallpokemon() {
    fetch('https://pokeapi.co/api/v2/pokemon?limit=151')
        .then(response => response.json())
        .then(function (allthemons) {
            allthemons.results.forEach(function (mons) {
                getthemondata(mons);

            })
        })
}
function getthemondata(mons) {
    let link = mons.url
    fetch(link)
        .then(response => response.json())
        .then(function (datamons) {
            datamons.moves.forEach(function (mon) {
                fulldata(mon)
            })
        })
}
function fulldata(mon) {
    if (selectedmove == mon.move.name) {
        let movelink = mon.move.url
        fetch(movelink)
            .then(response => response.json())
            .then(function (movedetail) {
                findmovedetail(movedetail)
            })
    } else { }
}

function findmovedetail(movedetail) {
    dc1 = movedetail.damage_class.name
    bpm1 = movedetail.power
    mt1 = movedetail.type.name
}

function getallpokemon2() {
    fetch('https://pokeapi.co/api/v2/pokemon?limit=151')
        .then(response => response.json())
        .then(function (allthemons2) {
            allthemons2.results.forEach(function (mons2) {
                getthemondata2(mons2);

            })
        })
}
function getthemondata2(mons2) {
    let link2 = mons2.url
    fetch(link2)
        .then(response => response.json())
        .then(function (datamons2) {
            datamons2.moves.forEach(function (mon2) {
                fulldata2(mon2)
            })
        })
}
function fulldata2(mon2) {
    if (selectedmove2 == mon2.move.name) {
        let movelink2 = mon2.move.url
        fetch(movelink2)
            .then(response => response.json())
            .then(function (movedetail2) {
                findmovedetail2(movedetail2)
            })
    } else { }
}

function findmovedetail2(movedetail2) {
    dc2 = movedetail2.damage_class.name
    bpm2 = movedetail2.power
    mt2 = movedetail2.type.name
}