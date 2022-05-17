// Funkcija sto ke proveri dali sekoj zbor vo korisnicki email e validen
// funkcijata treba da proveri dali sekoj od mail's e validen
// validen mail e toj mail sto ima kratenka "@" ".com" ili ".net" i nema prazni mesta
// Otkako ke zavrsi funkcijata da se ispecatat site mailovi sto se nevalidni, ako nema togas da se ispecati Okay

const mailList = [".com", "@", ".net"];

function checkMailList() {
  const invalidMails = mailList.filter((email) => {
    // Go definirame uslovot ovde ..
    // primer dali go sodrzi simbolot @
    if (!email.includes("@")) {
      return true;
    }
    if (email.includes(".com") && !email.includes(".net")) {
      return true;
    }

    // Da proverime dali ima prazno mestoi
    if (email.includes(" ")) {
      return true;
    }
    return false;
  });
  console.log(invalidMails);
}

checkMailList([
  "test@test.com",
  "test123.net",
  "test@test.com",
  "test@test.co",
]);

// Second exercise

// Funkcija koja sto ke prima iminja, ne e poznat formatot vo koj ke ja dobieme
// Da proveri da li site iminja zapocnuvaat so golema bukva, ako ne togas da ja napravi golema
// site ostanati bukvi da se pretvorat vo mali
// Dokolku celosnoto ime sodrzi i prezime, togas istite pravila vazat i za prezimeto. Mora da pocnuva so golema bukva i site ostanati da se mali
// Na kraj da se ispecati nizata od transformirani iminja

// Check to see if every element starts with a capital letter
// const names = ["john", "Jane", "Wilco", "jimmy", "ana"];

/* function namesCapitalized(names) {
  return ![a - z].test(names) && [A - Z].test(names);
}

namesCapitalized();
console.log(names);

*/

// Exercise explained on class

const modifiedNames = [];
const names = ["john", "Jane", "Wilco", "jimmy", "ana"];

// mora da imam loop, za izminuvanje na nizata

for (let name of names) {
  let newName = name.toLowerCase();
  console.log(newName);

  //   za imeto
  newName = newName.replace(newName.charAt(0), newName.charAt(0).toUpperCase());

  //   za prezimeto
  // prvo mora da go najdeme praznoto mesto (na koja pozicija e)
  // karakterot sto e se naoga posle nego e prvata bukva od prezimeto

  /*  let emptySpacePosition = newName.indexOf(" ");
  newName = newName.replace(
    newName.charAt(emptySpacePosition + 1),
    newName.charAt(emptySpacePosition + 1).toUpperCase()
  );
  modifiedNames.push(newName);

  console.log(modifiedNames);

  */

  newName = newName.split(" ");

  const nameArray = newName.map((nameOrSurname) => {
    return nameOrSurname.replace(
      nameOrSurname.charAt(0),
      nameOrSurname.charAt(0).toUpperCase()
    );
  }); // ["john", "Jane", "Wilco", "jimmy", "ana"]
  newName = nameArray.join(" ");

  modifiedNames.push(newName);
}

console.log(modifiedNames);

// modifiedNames(["john", "Jane", "Wilco", "jimmy", "ana"]);
