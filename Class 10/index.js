// async function = може да се повика во било кој дел од кодот, но резлутатот ке се добие после одредено непознато време

// This is the same as

async function getPosts() {
  // for loading element in HTML when we click get data
  document.getElementById("loading").style.visibility = "visible";

  const response = await fetch("https://jsonplaceholder.typicode.com/users");
  response.status; // со ова знаеме дали успешно е завршен кодот

  const data = await response.json();

  // 'data' се праќа како параметар
  const generateHTML = (data) => {
    console.log(data);
  };

  // when the data is loaded, loading will dishapear
  document.getElementById("loading").style.visibility = "hidden";
  generateHTML(data);

  // This

  // Ако се користи оваа, со catch() се фаќаат errors / грешки
  // function sendRequest() {
  //   fetch("https://jsonplaceholder.typicode.com/users")
  //     .then((response) => response.json())
  //     .then((data) => {});

  //     catch(err){

  //     }
  // }

  // -----------------------------------------------------------------------------------------------------------------------------
  // HTTP Status Codes
  // 200 (is used for GET) , 201 (is used for POST or PUT) .. All codes that start at 200, are successful codes
  // 300 above , is a multiple choice requests.
  // 400 above, are error codes on client side (The request didn't form on the client side)
  // 500 above, server unreachable - bad gateway

  if (response.status.toString().startsWith("4")) {
    console.log("There seems to be a error!");
    return;
  }
}

// New function for sending data

const createPost = async () => {
  // The code in here will be tested for errors
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/users", {
      method: "POST",
      body: JSON.stringify({
        email: "bojan-stanimirovski097@hotmail.com",
        name: "Bojan Stanimirovski",
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    });
    // Catch error
  } catch (err) {
    console.log(err);
  } finally {
    console.log("Clean up code goes here");
  }
};
