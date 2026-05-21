let isRaining = false;

let username = "Ade";
let password = "Adebisi";

console.log(typeof isRaining);

if (isRaining == true) {
  console.log("Carry unberella");
} else {
  console.log("No worry");
}
if (username == "" || password == "") {
  console.log("All fields are reqired");
} else {
  console.log(username, password);
}
let Biology = 30;
let chemistry = 55;
let physics = 35;
let mathematics = 30;
let score = (Biology + physics + mathematics + chemistry) / 4;
console.log(score);

// if/else is
if (score >= 80) {
  console.log("Bravo");
} else if (score >= 70) {
  console.log("V.good");
} else if (score >= 60) {
  console.log("Good");
} else if (score >= 40) {
  console.log("poor");
} else {
  console.log("you need to read more");
}

//SWITCH VARIABLE
let weather = "sunny";
switch (weather) {
  case "rainy":
    console.log("it is rainy today");

    break;
  case "cloudy":
    console.log("it will probably rain");

    break;
  case "sunny":
    console.log("the sun is shinning");

    break;

  default:
    console.log("it's a Great Weather!");    
}

//ternary operator

let isGoing = true


isGoing? console.log("is going o"): console.log("it's not going");
;
