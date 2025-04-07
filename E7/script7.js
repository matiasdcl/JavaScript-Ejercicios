function getTheTitles(arrayBooks)
{
    const booksTitles = [];
    for (let index = 0; index < arrayBooks.length; index++) 
    {
      booksTitles.push(arrayBooks[index].title);
    }
    return console.log(booksTitles);
}

const books = [
    {
      title: 'La niebla',
      author: 'Stephen King'
    },
    {
      title: 'La divina comedia',
      author: 'Dante Alighieri'
    },
    {
      title: 'El señor de los anillos',
      author: 'John R.R.Tolkien'
    },
    {
      title: '1984',
      author: 'George Orwell'
    }
  ];

getTheTitles(books);

