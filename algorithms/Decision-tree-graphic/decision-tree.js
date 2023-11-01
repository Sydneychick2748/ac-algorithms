
  // Write code here to make the decision tree into an algorithm!

  function transportationOptions(weather,  isHungry, time) {
    if (weather === "sunny" && time > 30) {
      return "Walk to your destination it is greater than 30 min.";
    } else if (weather === "sunny" && time < 30) {
      return "Take the bus to your destination it is less than 30 min.";
    } else if (weather === "cloudy" && isHungry) {
      return "Walk to your destination because you are hungry";
    } else if (weather === "cloudy" && !isHungry) {
      return "Catch the bus to your destination because you are not hungry";
    } else if (weather === "rain") {
      return "Take the bus to your destination.";
    } else {
      return "Invalid weather condition.";
    }
  }

  console.log(transportationOptions, "transportationOptions");

  console.log(transportationOptions("sunny",true, 20)); // Output: Take the bus to your destination.
  console.log(transportationOptions("sunny",true, 35)); // Output: Walk to your destination.
  console.log(transportationOptions("cloudy", true)); // Output: Walk to your destination because you are hungry.
  console.log(transportationOptions("cloudy", false)); // Output: Catch the bus to your destination because you are not hungry.
  console.log(transportationOptions("rain")); // Output: Take the bus to your destination.
  console.log(transportationOptions("snow", 10)); // Output: Invalid weather condition.

