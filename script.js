const theDay = document.getElementById("theDay");
const onTheMenu = document.getElementById("onTheMenu");

let weekdays = [
  "Söndag",
  "Måndag",
  "Tisdag",
  "Onsdag",
  "Torsdag",
  "Fredag",
  "Lördag",
];

const d = new Date();
let day = d.getDay();
let dayInTheWeek = weekdays[d.getDay()];

theDay.append(`Idag är det ${dayInTheWeek}`);

let menuItems = [
  "Stängt",
  "Köttbullar, potatis och sås",
  "Fiskpanetter, potatismos och remuladsås",
  "Blodpudding med lingon",
  "Ärtsoppa och pannkakor",
  "Tacos",
  "Stängt",
];

let text = "";

switch (day) {
  case 0:
    text = "Stängt";
    console.log("Stängt");
    break;
  case 1:
    text = "Köttbullar, potatis och sås";
    console.log("Köttbullar, potatis och sås");
    break;
  case 2:
    text = "Fiskpanetter, potatismos och remuladsås";
    console.log("Fiskpanetter, potatismos och remuladsås");
    break;
  case 3:
    text = "Blodpudding med lingon";
    console.log("Blodpudding med lingon");
    break;
  case 4:
    text = "Ärtsoppa och pannkakor";
    console.log("Ärtsoppa och pannkakor");
    break;
  case 5:
    text = "Ärtsoppa och pannkakor";
    console.log("Ärtsoppa och pannkakor");
    break;
  case 6:
    text = "Tacos";
    console.log("Tacos");
    break;

  default:
    text = "Stängt";
    console.log("Stängt");
    break;
}

onTheMenu.append(`Då serveras: ${text}`);

weekdays.forEach((day) => {
  let dayList = document.getElementById("dayList");
  let dayListItem = document.createElement("option");
  dayListItem.innerHTML = day;
  dayListItem.id = day;
  dayList.append(dayListItem);
});
