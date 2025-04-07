function sumAll(numA, numB)
{
    if (numA >= numB)
        {return console.log("numeros invalidos.")}
    let resultado = 0;
    for (let i = numA; i <= numB; i++) {
        resultado += i;
    }
    console.log(`${numA} + ${numB} = ${resultado}`);
}

const numA = 25;
const numB = 30;
sumAll(numA, numB);