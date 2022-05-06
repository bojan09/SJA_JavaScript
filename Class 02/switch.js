// Switch statements

// Се користи најчесто за некои прости проверки, за вредност на некој string или number, во случај да провериме некој password или barcode
// switch(uslov)

// Да речеме имаме продукти од типот: млеко, леб, банана, киви, јаболка ( Milk, Banana, Kiwi, Apple,)

const product = "Milk";

// Викаме дека оваа вредност продукт е некој од погоре наведените, и секако сакаме за секој продукт да има посебна цена
switch (product) {
  // this here is called block/body
  // case клучен збор за switch
  case "Milk": {
    console.log(" The price of Milk is 45den. ");
    break;
    // Break statement вели доколку оваа е варибилата којашто е бараната, тогаш прави break и излевај надвор од switch, се спушта дирекно на крајот
  }

  case "Bread": {
    console.log(" The price of Bread is 35den.");
    break;
  }

  case "Banana": {
    console.log(" The price of Banana is 35den.");
    break;
  }

  case "Kiwi": {
    console.log(" The price of Kiwi is 57den.");
    break;
  }

  case "Apple": {
    console.log(" The price of Apple is 39den.");
    break;
  }

  default: {
    //   Ова ке ги опфати сите можни сценарија доколку вредноста на променливата не е една од дадените case
    console.log(" Unknown product ");
    break;
  }
}

console.log(product);
