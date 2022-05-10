// Вежба 2

// Листа од книги, каде што секоја книга е објект, секоја книга си има име,автор,година, и статус дали е прочитана или не.

const books = [
  {
    name: "Crime and Punishment",
    author: "Fyodor Dostoyevsky",
    year: "1887",
    read: false,
  },

  {
    name: "Harry Potter",
    author: "JK Rolling",
    year: "2000",
    read: true,
  },

  {
    name: "The Art of War",
    author: "Sun Tzu",
    year: "2000",
    read: true,
  },

  {
    name: "The Hobbit",
    author: "J.R.R. Tolkien",
    year: "1910",
    read: true,
  },
];

// One way

for (let book of books)
  if (book.read) {
    console.log(book.name);
  }

// The above is same as. But it's much rarely used
for (let i = 0; i < books.length; i++) {
  let book = books[i];
}
// Third way
for (let book of books) {
  book.read && console.log(book.name);
}

// Fourth way
books.forEach(function (book) {}); // Very common
