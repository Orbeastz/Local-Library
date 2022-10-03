function findAuthorById(authors, id) {
  const found = authors.find((author) => author.id === id )
  return found
}

function findBookById(books, id) {
  const found = books.find((book) => book.id === id )
  return found
}

function partitionBooksByBorrowedStatus(books) {
  const resultOne = books.filter((book) => book.borrows[0].returned === false)
  const resultTwo = books.filter((book) => book.borrows[0].returned === true)
  return [resultOne, resultTwo]
}

function getBorrowersForBook(book, accounts) {
  return book.borrows.map(borrow => {
    const account = accounts.find(account => account.id === borrow.id)
    account.returned = borrow.returned
    return account
  }).slice(0, 10)
}

module.exports = {
  findAuthorById,
  findBookById,
  partitionBooksByBorrowedStatus,
  getBorrowersForBook,
};
