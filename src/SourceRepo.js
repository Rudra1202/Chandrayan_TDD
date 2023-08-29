const { moveForward, moveBackward} = require("./movement");
const { turnLeft ,turnRight } = require("./turnLR");
const { turnUp ,turnDown} = require("./turnUpDown");

function SourceRepo(commands, start) {
  let direction = start.direction;
  let coordinates = start.coordinates;
  var count = 0;
  for (let i = 0; i < commands.length; i++) {
    let c = commands[i];
    count++;
    if (c === "f") {
      coordinates = moveForward(coordinates, direction);
    } else if (c === "b") {
      coordinates = moveBackward(coordinates, direction);
    } else if (c === "u") {
      direction = turnUp(direction);
    } else if (c === "d") {
      direction = turnDown(direction);
    } else if (c === "l") {
      direction = turnLeft(direction);
    } else if (c === "r") {
      direction = turnRight(direction);
    } else {
      console.log("There is such tyoe of commands");
    }
  }
  // console.log(
  //   "Position : ( x, y, z ) : " +
  //     coordinates +
  //     " and Direction is --> " +
  //     direction
  // );
  return { coordinates, direction };
}

module.exports = {
  SourceRepo,
};
