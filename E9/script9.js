function getOdds(numsArray)
{
    const imparesArray = numsArray.filter(numero => numero % 2 !== 0);

    return console.log(`Numeros impares del array: ${imparesArray}`);
}

 let numerosDeArray = [18,17,4,143,10426,10,1,33];
 getOdds(numerosDeArray);