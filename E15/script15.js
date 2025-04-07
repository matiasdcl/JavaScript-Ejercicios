var botonAgregar = document.getElementById("agregarElemento");
var botonEliminar = document.getElementById("eliminarElemento");
var input = document.getElementById("input");
var lista = document.getElementById("lista");

botonAgregar.addEventListener("click", function()
{
    var newElem = document.createElement("li");
    newElem.textContent = input.value;
    lista.appendChild(newElem);
    input.value = "";
});

botonEliminar.addEventListener("click", function()
{
    var elementosLista = lista.getElementsByTagName("li");
    if (elementosLista.length > 0)
        {lista.removeChild(elementosLista[elementosLista.length - 1])}
    else
    {alert("no hay elementos para eliminar")}
});