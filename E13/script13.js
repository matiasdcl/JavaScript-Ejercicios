var boton = document.getElementById("changeText");

boton.addEventListener("click", function()
{
    var parrafo = document.getElementById("changeP")
    parrafo.textContent = "Texto cambiado";
});