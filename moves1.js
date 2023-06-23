function selectmove (){
    var f = document.getElementById("Move1");
    displaymove = f.options[f.selectedIndex].value;
    selectedmove = displaymove
    document.getElementById("selmove1").value = f.options[f.selectedIndex].text
    var g = document.getElementById("Move2");
    displaymove2 = g.options[g.selectedIndex].value;
    selectedmove2 = displaymove2
    document.getElementById("selmove2").value = g.options[g.selectedIndex].text

}