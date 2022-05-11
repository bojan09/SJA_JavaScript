// Од листата со книги што ја имавме во вежбите со објектите да се изгенерира HTML UL елемент во кој што секоја книга ќе биде посебен LI елемент (таг) и ќе ги пишува авторот, годината и името на книгата.

// Генерирањето на HTML  елементите да се направи со функции, може да биде со клик на копче, а може и инстанто при лоадирање на страната,да биде со функција.

// Функцијата треба да работи и ако се смени листата од книги, значи ништо не смее да биде хардкодирано.

const booksDescription = () => {
  const element = document.getElementById("title");
  element.textContent = "Book description generator";

  // Листа од книги, каде што секоја книга е објект, секоја книга си има име,автор,година, и статус дали е прочитана или не.

  const books = [
    {
      name: "Crime and Punishment",
      author: "Fyodor Dostoyevsky",
      year: "1887",
      read: "not read it yet",
    },

    {
      name: "Harry Potter",
      author: "JK Rolling",
      year: "2000",
      read: "read the book",
    },

    {
      name: "The Art of War",
      author: "Sun Tzu",
      year: "2000",
      read: "read the book",
    },

    {
      name: "The Hobbit",
      author: "J.R.R. Tolkien",
      year: "1910",
      read: "read the book",
    },
  ];

  for (let book of books) {
    const list = document.createElement("ul");
    const listItem = document.createElement("li");

    listItem.textContent =
      book.name +
      " - Is a book written by: " +
      book.author +
      " and it was published in the year " +
      book.year +
      " , I have " +
      book.read;

    console.log(list);

    list.appendChild(listItem);
    element.appendChild(list);
  }
};
