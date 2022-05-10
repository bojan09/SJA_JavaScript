//* function changeText -- Can also be done like this

//! Arrow function
// You can change the variable to let, or var.
/*
const changeText = () => {
  // DOM object
  const element = document.getElementById("title");

  //   Console output
  console.log(element);

  //Changing the element variable content
  element.textContent = "My first JavaScript exercise with functions";

  // You can also append it like the following
  element.textContent =
    element.textContent + "My first JavaScript exercise with functions"; */

//   It will output and show the h2 element on the page
// };

// Adding a list item
const changeText = () => {
  // DOM Object
  const element = document.getElementById("title");
  element.textContent =
    element.textContent + "My first JavaScript exercise with functions";
  // Adding ul
  const list = document.createElement("ul");
  console.log(list);
  const listItem = document.createElement("li");
  listItem.textContent = "Hi there";

  list.appendChild(listItem);
  element.appendChild(list);
};
