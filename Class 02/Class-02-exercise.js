// Ден од неделата
const denOdNedelata = prompt(" Vnesete den od nedelata ");

switch (denOdNedelata) {
  case "ponedelnik":
  case "vtornik":
  case "sreda":
  case "cetvrtok":
  case "petok": {
    console.log(" Denes e raboten den ");
    break;
  }

  case "sabota":
  case "nedela": {
    console.log(" Denes e vikend ");
    break;
  }

  default: {
    console.log(" Ve molime vnesete validen den ");
    break;
  }
}
