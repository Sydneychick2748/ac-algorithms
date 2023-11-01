// there is weather the weather has 3 factors sun cloud and rain
// if it is sunny then if greater than 30 min you will walk to your destination
// if it is sunny and the time is less than 30 min then you will take the bus to your destination
// if it is cloudy then show hungry
// if you are hungry then walk
// if you are not hungry then take the bus
// if it is rain then show bus

function transportationOptions(weather, isHungry, time) {
  if (weather === "sunny" && time > 30) {
    return "Walk to your destination it is greater than 30 min and it is sunny.";
  } else if (weather === "sunny" && time < 30) {
    return "Take the bus to your destination it is less than 30 min and it is sunny.";
  } else if (weather === "cloudy" && isHungry) {
    return "Walk to your destination because you are hungry and it is cloudy";
  } else if (weather === "cloudy" && !isHungry) {
    return "Catch the bus to your destination because you are not hungry and it is cloudy";
  } else if (weather === "rain") {
    return "Take the bus to your destination it is raining .";
  } else {
    return "Invalid weather condition.";
  }
}

console.log(transportationOptions, "transportationOptions");

console.log(transportationOptions("sunny", true, 35)); // Output: "Walk to your destination it is greater than 30 min and it is sunny.";
console.log(transportationOptions("sunny", true, 10)); // Output: "Take the bus to your destination it is less than 30 min and it is sunny.";
console.log(transportationOptions("cloudy", true)); // Output: Walk to your destination because you are hungry and it is cloudy";
console.log(transportationOptions("cloudy", false)); // Output: "Catch the bus to your destination because you are not hungry and it is cloudy";
console.log(transportationOptions("rain")); // Output: "Take the bus to your destination it is raining .";
console.log(transportationOptions("snow", false, 10)); // Output: Invalid weather condition.
