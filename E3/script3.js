function removeFromArray(array, item)
{
    let encontrado = false;
    for (let index = 0; index < array.length; index++) {
        if (array[index] == item)
        {
            array.splice(index, 1);
            encontrado = true;
        }
    }
    
    if (encontrado == true)
    {printArray(array);}
    else
    {console.log("Ese elemento no esta en el array.");}
}

function printArray(array)
{
    let nuevosColores = "Colores: ";
    array.forEach(element => {
        nuevosColores += element + ", ";
    });
    nuevosColores = nuevosColores.slice(0, -2);
    console.log(nuevosColores);
}

let arrayColores = ["azul", "rojo", "amarillo", "verde"];
let unColor = "amarillo";
removeFromArray(arrayColores, unColor);