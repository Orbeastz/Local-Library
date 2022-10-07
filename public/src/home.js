function getTotalItemCount(item){
  let total = 0
  item.forEach((item) => {
    total +=1
  })
  return total
}
function getTotalBooksCount(books) {
  var totalBooks = getTotalItemCount(books)
  return totalBooks
}

function getTotalAccountsCount(accounts) {
  var totalAccounts = getTotalItemCount(accounts)
  return totalAccounts
}

function getBooksBorrowedCount(books) {
  count = books.filter((book) => book.borrows[0].returned === false)
  return count.length 
}

function getMostCommonGenres(books) {
  const newBooksObject = books.reduce((newBooksObject, {genre}) => {
    newBooksObject[genre] ? newBooksObject[genre]++ : newBooksObject[genre] = 1
    return newBooksObject
  },{})
  return Object.entries(newBooksObject).map(([name, count]) => (
    {name, count})).sort((genreA,genreB) => genreB.count - genreA.count).slice(0,5)
}

function getMostPopularBooks(books) {
  return books.map(book => {
    return {
      name: book.title,
      count: book.borrows.length
    }
  }).sort((bookA, bookB) => bookB.count - bookA.count).slice(0,5)
}

function getMostPopularAuthors(books, authors) {
  const topAuthorsArray = [];
  authors.forEach((author) => {
    const byThisAuthor = books.filter((book) => book.authorId === author.id)
    let totalBorrows = 0;
    byThisAuthor.forEach((book) => (totalBorrows += book.borrows.length))
    topAuthorsArray.push({
      name: author.name.first + " " + author.name.last,
      count: totalBorrows,
    });
  });
 topAuthorsArray.sort((a, b) => (a.count < b.count ? 1 : -1))
  topAuthorsArray.length = 5
  return topAuthorsArray
}

module.exports = {
  getTotalBooksCount,
  getTotalAccountsCount,
  getBooksBorrowedCount,
  getMostCommonGenres,
  getMostPopularBooks,
  getMostPopularAuthors,
};
