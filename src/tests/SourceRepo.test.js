const { SourceRepo } = require("../SourceRepo");

//Test 1 Consider only one test Direction case
test("when only one command", () => {
  const initial = {
    coordinates: [0, 0, 0],
    direction: "N",
  };
  const final = {
    coordinates: [0, 1, 0],
    direction: "N",
  };
  const output = SourceRepo("f", initial);
  expect(output).toStrictEqual(final);
});

//Test 2
test("multiple commands", () => {
  const commands = ["f", "r", "u", "b", "l"];
  const initial = {
    coordinates: [0, 0, 0],
    direction: "N",
  };
  const final = {
    coordinates: [0, 1, -1],
    direction: "W",
  };
  const output = SourceRepo(commands, initial);
  expect(output).toStrictEqual(final);
});

//Test 3
test("multiple commands", () => {
  const commands = ["f", "f", "u", "l", "l"];
  const initial = {
    coordinates: [0, 0, 0],
    direction: "W",
  };
  const final = {
    coordinates: [-2, 0, 0],
    direction: "S",
  };
  const output = SourceRepo(commands, initial);
  expect(output).toStrictEqual(final);
});

//Test 4
test("multiple commands", () => {
  const commands = ["f", "r", "u", "b", "r"];
  const initial = {
    coordinates: [0, 0, 0],
    direction: "U",
  };
  const final = {
    coordinates: [0, 0, 0],
    direction: "E",
  };
  const output = SourceRepo(commands, initial);
  expect(output).toStrictEqual(final);
});

//Test 5
test("multiple commands", () => {
  const commands = ["f", "r", "b", "b", "l"];
  const initial = {
    coordinates: [0, 0, 0],
    direction: "N",
  };
  const final = {
    coordinates: [-2, 1, 0],
    direction: "N",
  };
  const output = SourceRepo(commands, initial);
  expect(output).toStrictEqual(final);
});

//Test 6
test("multiple commands", () => {
  const commands = ["f", "f", "f", "f", "f"];
  const initial = {
    coordinates: [5, -2, 1],
    direction: "E",
  };
  const final = {
    coordinates: [10, -2, 1],
    direction: "E",
  };
  const output = SourceRepo(commands, initial);
  expect(output).toStrictEqual(final);
});

//Test 7
test("multiple commands", () => {
  const commands = ["f", "r", "r", "l", "u"];
  const initial = {
    coordinates: [2, -2, 1],
    direction: "S",
  };
  const final = {
    coordinates: [2, -3, 1],
    direction: "U",
  };
  const output = SourceRepo(commands, initial);
  expect(output).toStrictEqual(final);
});

//Test 8
test("multiple commands", () => {
  const commands = ["f", "r", "d"];
  const initial = {
    coordinates: [0, 0, 0],
    direction: "N",
  };
  const final = {
    coordinates: [0, 1, 0],
    direction: "D",
  };
  const output = SourceRepo(commands, initial);
  expect(output).toStrictEqual(final);
});

//Test 9
test("multiple commands", () => {
  const commands = ["d", "l", "b", "b"];
  const initial = {
    coordinates: [0, 0, 0],
    direction: "W",
  };
  const final = {
    coordinates: [-2, 0, 0],
    direction: "E",
  };
  const output = SourceRepo(commands, initial);
  expect(output).toStrictEqual(final);
});

//Test 10
test("multiple commands", () => {
  const commands = ["r", "r", "r"];
  const initial = {
    coordinates: [1, 1, 1],
    direction: "N",
  };
  const final = {
    coordinates: [1, 1, 1],
    direction: "W",
  };
  const output = SourceRepo(commands, initial);
  expect(output).toStrictEqual(final);
});

//Test 11
test("for multiple commands", () => {
  const commands = ["u", "u", "f", "l"];
  const initial = {
    coordinates: [0, 0, 0],
    direction: "U",
  };
  const final = {
    coordinates: [0, -1, 0],
    direction: "E",
  };
  const output = SourceRepo(commands, initial);
  expect(output).toStrictEqual(final);
});

