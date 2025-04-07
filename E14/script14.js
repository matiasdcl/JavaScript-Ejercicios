var boton = document.getElementById("agregarElemento");
var input = document.getElementById("input");
var lista = document.getElementById("lista");

boton.addEventListener("click", function()
{
    var newElem = document.createElement("li");
    newElem.textContent = input.value;
    lista.appendChild(newElem);
    input.value = "";
});