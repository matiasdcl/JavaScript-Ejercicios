function leapYears(year)
{
    if ((year % 4 === 0) || ((year % 100 === 0) && (year % 400 === 0)))
    {
        return console.log(true);
    }
    else
    {
        return console.log(false);
    }
}

let isLeapYearN1 = 1984;
let isLeapYearN2 = 2000;
let isLeapYearN3 = 1723;
let isLeapYearN4 = 2025;
leapYears(isLeapYearN1);
leapYears(isLeapYearN2);
leapYears(isLeapYearN3);
leapYears(isLeapYearN4);