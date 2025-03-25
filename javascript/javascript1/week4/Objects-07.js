const book = {
  title: "Risale-i Nur",
  author: "Bediuzzaman Said Nursi",
  yearPublished: 1925,

  getAge: function () {
    const currentYear = new Date().getFullYear();
    return currentYear - this.yearPublished;
  },
};

function showBookInfo(book) {
  return (
    book.title +
    " by " +
    book.author +
    " was published between " +
    book.yearPublished +
    "."
  );
}
console.log(showBookInfo(book));
console.log("This book is " + book.getAge() + " years old.");

const allBooks = [
  {
    title: "Risale-i Nur",
    author: "Bediuzzaman Said Nursi",
    yearPublished: 1925,
  },
  { title: "Atomic Habits", author: "James Clear", yearPublished: 2018 },
  { title: "The Power of Now", author: "Eckhart Tolle", yearPublished: 1997 },
];

function getBookTitles(bookArray) {
  return bookArray.map(function (book) {
    return book.title;
  });
}
console.log(getBookTitles(allBooks));
