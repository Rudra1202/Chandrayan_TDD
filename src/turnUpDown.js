function turnUp(Direction) {
    if (Direction == "N" || Direction == "S" || Direction == "E" || Direction == "W") {
      return "U";
    }
    if (Direction === "U") {
      return "D";
    }
    if (Direction === "D") {
      return "S";
    }
    
  }
  function turnDown(Direction) {
    if (Direction == "N" || Direction == "S" || Direction == "E" || Direction == "W") {
      return "D";
    }
    if (Direction === "U") {
      return "S";
    }
    if (Direction === "D") {
      return "N";
    }
    
  }
  
  module.exports = {
    turnUp,turnDown
  };
  
