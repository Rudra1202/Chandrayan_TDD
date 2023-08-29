// All these test cases are for turn Up
const { turnUp } = require("../turnUpDown");
test("Up for North", () => {
  expect(turnUp("N")).toStrictEqual("U");
});
test("Up for South", () => {
  expect(turnUp("S")).toStrictEqual("U");
});
test("Up for East", () => {
  expect(turnUp("E")).toStrictEqual("U");
});
test("Up for West", () => {
  expect(turnUp("W")).toStrictEqual("U");
});

test("if U then D", () => {
  expect(turnUp("U")).toStrictEqual("D");
});

test("if D and we have to move Up then S", () => {
  expect(turnUp("D")).toStrictEqual("S");
});

// All these test cases are for turn Down

const { turnDown } = require("../turnUpDown");
test("Down for North", () => {
  expect(turnDown("N")).toStrictEqual("D");
});
test("Down for South", () => {
  expect(turnDown("S")).toStrictEqual("D");
});
test("Down for East", () => {
  expect(turnDown("E")).toStrictEqual("D");
});
test("Down for West", () => {
  expect(turnDown("W")).toStrictEqual("D");
});
test("if U and we havem to move down then S", () => {
  expect(turnDown("U")).toStrictEqual("S");
});
test("if D then D", () => {
  expect(turnDown("D")).toStrictEqual("N");
});
