//! Declare a function

function helloWorld(parameter1, parameter2) {
  // Functions take parameters as variables declared within the ()

  //* Function body
  //   Calling the two parameters
  alert(parameter1 + parameter2);

  //   you can also use a variable for the parameters
  const sum = parameter1 + parameter2;
  alert(sum);
  alert("Hello world!");
}

//! Calling a function
// When the function is called, the function parameters are also defined
// This is where the values of the parameters are defined
// helloWorld();

// Functions allow us to write reuasable code
