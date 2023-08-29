function turnRight(Direction) {
  if (Direction === "N") {
    return "E";
  }
  if (Direction === "S") {
    return "W";
  }
  if (Direction === "E") {
    return "S";
  }
  if (Direction === "W") {
    return "N";
  }
  if (Direction === "U") {
    return "E";
  }
  if (Direction === "D") {
    return "W";
  }  
  
}
function turnLeft(Direction) {
  if (Direction === "N") {
    return "W";
  }
  if (Direction === "S") {
    return "E";
  }
  if (Direction === "E") {
    return "N";
  }
  if (Direction === "W") {
    return "S";
  }
  if (Direction === "U") {
    return "W";
  }
  if (Direction === "D") {
    return "E";
  }  
  
}

module.exports = {
  turnLeft,turnRight
};