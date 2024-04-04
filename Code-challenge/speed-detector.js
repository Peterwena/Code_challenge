// Solution for Speed Detector

const speed = parseInt(prompt("Enter car speed (in km/h): "));
const speedLimit = 70;
const kmPerDemeritPoint = 5;
const maxDemeritPoints = 12;

function calculateDemeritPoints(speed, speedLimit, kmPerDemeritPoint) {
  if (speed <= speedLimit) {
    return "Ok";
  } else {
    const demeritPoints = Math.floor((speed - speedLimit) / kmPerDemeritPoint);
    if (demeritPoints >= maxDemeritPoints) {
      return "License suspended";
    } else {
      return `Points: ${demeritPoints}`;
    }
  }
}

console.log(calculateDemeritPoints(speed, speedLimit, kmPerDemeritPoint));
