function findTheOldest(peopleArray)
{
    let ages = [];
    for (let index = 0; index < peopleArray.length; index++) {
        ages.push((peopleArray[index].yearOfDeath) - (peopleArray[index].yearOfBirth));
        
    }
    let maxAge = Math.max(...ages);
    let pos = ages.indexOf(maxAge)
    return console.log(`${peopleArray[pos].name} es la persona con mas edad (${ages[pos]} años).`);
}


const people = [
    {
        name: "Carly",
        yearOfBirth: 1942,
        yearOfDeath: 1970,
    },
    {
        name: "Ray",
        yearOfBirth: 1962,
        yearOfDeath: 2011,
    },
    {
        name: "Jane",
        yearOfBirth: 1912,
        yearOfDeath: 1941,
    },
    {
        name: "Williams",
        yearOfBirth: 1870,
        yearOfDeath: 1913,
    },
    {
        name: "Antonio",
        yearOfBirth: 1972,
        yearOfDeath: 2024,
    },
    {
        name: "Marcos",
        yearOfBirth: 1918,
        yearOfDeath: 2018,
    }
  ]

  findTheOldest(people);