function getSum(numsArray)
{
    let sumaTotal = numsArray.reduce((suma, valActual) => suma + valActual, 0)
    console.log(`Numeros del array: ${numsArray}.`);
    return console.log(`Suma total: ${sumaTotal}`);
}

const sumaDeNumerosArray = [1,2,3,4,5,6,7,8,9];
getSum(sumaDeNumerosArray);