const { turnLeft } = require("../turnLR");

//All these test cases are for Turn Left
test("North to West", () => {
  expect(turnLeft("N")).toStrictEqual("W");
});

test("South to East", () => {
  expect(turnLeft("S")).toStrictEqual("E");
});

test("East to North", () => {
  expect(turnLeft("E")).toStrictEqual("N");
});

test("West to South", () => {
  expect(turnLeft("W")).toStrictEqual("S");
});

test("Up to West", () => {
  expect(turnLeft("U")).toStrictEqual("W");
});

test("Down to East", () => {
  expect(turnLeft("D")).toStrictEqual("E");
});


//All these test cases are for Turn Right
const { turnRight } = require("../turnLR");

test("North to East", () => {
  expect(turnRight("N")).toStrictEqual("E");
});

test("South to West", () => {
  expect(turnRight("S")).toStrictEqual("W");
});

test("East to South", () => {
  expect(turnRight("E")).toStrictEqual("S");
});

test("West to North", () => {
  expect(turnRight("W")).toStrictEqual("N");
});

test("Up to East", () => {
  expect(turnRight("U")).toStrictEqual("E");
});

test("Down to West", () => {
  expect(turnRight("D")).toStrictEqual("W");
});
