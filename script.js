const d = new Date("November 25, 2021");

const weekday = new Array(7);
weekday[0] = "Söndag - Stängt";
weekday[1] = "Måndag  och då serveras: Soppa";
weekday[2] = "Tisdag och då serveras: Korv med börd";
weekday[3] = "Onsdag och då serveras: Hamburgare";
weekday[4] = "Torsdag och då serveras: Sallad";
weekday[5] = "Fredag och då serveras: Kebab";
weekday[6] = "Lördag - Stängt";

let day = weekday[d.getDay()]; 
document.getElementById("dayOfTheWeek").innerHTML = day;

console.log(day)

function matFunction() {
    var text;
    var matratt = document.getElementById("matInput").value;

    switch(matratt) {
        case "Måndag":
        text = "Soppa.";
        break;
        case "Tisdag":
        text = "Korv med börd.";
        break;
        case "Onsdag":
        text = "Hamburgare.";
        break;
        case "Torsdag":
        text = "Sallad";
        break;
        case "Fredag":
        text = "Kebab";
        break;
        case "Lördag":
        text = "Stängt.";
        break;
        case "Söndag":
        text = "Stängt.";
        break;
        default:
        text = "Har du stavat rätt?!";
      }
      document.getElementById("matratten").innerHTML = text;
    }

// const link = document.getElementById("dayOfTheWeek");

// var newElement = document.createElement("h1");
// newElement.append(day);