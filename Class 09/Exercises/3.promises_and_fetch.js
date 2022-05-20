// Promise is a class

// new Promise();

const request = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("Request completed successfully");
  }, 1000);
});

// Then call back

request.then((response) => {
  console.log(response);
});

// This will print first, becouse the line above has a set timeInterval of 1 second before doing the request
console.log("Hello");

// To request data from a service we will be using fetch()

// Using fetch ()

// Оваа функција ги прима и препраќа податоците
function sendRequest() {
  fetch("https://jsonplaceholder.typicode.com/users")
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
    });

  console.log(data);
  handleData(data);
}

// Оваа функција креира/итерира елементи
function handleData(data) {}
