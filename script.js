const theDay = document.getElementById("theDay");
const onTheMenu = document.getElementById("onTheMenu");
let mealDiv = document.getElementById("mealDiv");
let meal = "";

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
    text = "Tacos";
    console.log("Tacos");
    break;
  case 6:
    text = "Stängt";
    console.log("Stängt");
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

let checkDay = () => {
  let dayList = document.getElementById("dayList").value;
  mealDiv.innerHTML = "";

  switch (dayList) {
    case "Måndag":
      meal = "Köttbullar, potatis och sås";
      displayMeal(meal);
      break;
    case "Tisdag":
      meal = "Fiskpanetter, potatismos och remuladsås";
      displayMeal(meal);
      break;
    case "Onsdag":
      meal = "Blodpudding med lingon";
      displayMeal(meal);
      break;
    case "Torsdag":
      meal = "Ärtsoppa och pannkakor";
      displayMeal(meal);
      break;
    case "Fredag":
      meal = "Tacos";
      displayMeal(meal);
      break;
    case "Lördag":
      meal = "Ingen mat idag då det tyvärr är stängt";
      displayMeal(meal);
      break;
    case "Söndag":
      meal = "Inte ens på guds dag serveras det mat!?";
      displayMeal(meal);
      break;

    default:
      meal = "Välj dag";
      displayMeal(meal);
      break;
  }
};

let button = document.getElementById("btn");
button.addEventListener("click", checkDay);

let displayMeal = (meal) => {
  console.log(meal);
  mealDiv.append(meal);
};
