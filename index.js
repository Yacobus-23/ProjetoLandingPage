var leonardo = window.document.getElementById("leonardo")

var bruna = window.document.getElementById("bruna")

var leonardo2 = window.document.getElementById("leonardo2")

var setaesquerda = window.document.getElementById("setaesquerda")

var setadireita = window.document.getElementById("setadireita")

function rolardireita() {
    leonardo.style ="display:none"
    leonardo2.style ="display:flex"
    setadireita.style="display:none"
    setaesquerda.style="display:flex"

} 

function rolaresquerda() {
    leonardo.style ="display:flex"
    leonardo2.style ="display:none"
    setadireita.style="display:flex"
    setaesquerda.style="display:none"
    
}
