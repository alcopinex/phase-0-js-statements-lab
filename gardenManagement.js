const temperature = 90
const timeOfDay = "morning"
let soilMoisture = 30

// 1. Temperature check
if (temperature > 80) {
  console.log("Watering on");
} else {
  console.log("Watering off");
}

// 2. Time of day check
if (timeOfDay === "evening" || timeOfDay === "night") {
  console.log("Lights on");
} else {
  console.log("Lights off");
}

// 3. Increment soil moisture until it reaches 40
while (soilMoisture < 40) {
  soilMoisture += 5;
  console.log(soilMoisture);
}
