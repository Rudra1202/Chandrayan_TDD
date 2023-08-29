const { moveForward } = require("../movement");

//Test1 
test("forward --> face Direction is North", () => {
  expect(moveForward([0,0,0], "N")).toStrictEqual([0, 1, 0]);
});

//Test2
test("forward --> face Direction is South", () => {
  expect(moveForward([0,0,0], "S")).toStrictEqual([0, -1, 0]);
});

//Test3
test("forward --> face Direction is East", () => {
  expect(moveForward([0,0,0], "E")).toStrictEqual([1, 0, 0]);
});

//Test4
test("forward --> face Direction is West", () => {
  expect(moveForward([0,0,0], "W")).toStrictEqual([-1, 0, 0]);
});

//Test5
test("forward --> face Direction is Up", () => {
  expect(moveForward([0,0,0], "U")).toStrictEqual([0, 0, 1]);
});

//Test6
test("forward --> face Direction is Down", () => {
  expect(moveForward([0,0,0], "D")).toStrictEqual([0, 0, -1]);
});

//backward Direction

const {moveBackward} = require("../movement");
//Test7
test("Backward --> face Direction is North", () => {
  expect(moveBackward([0,0,0], "N")).toStrictEqual([0, -1, 0]);
});

//Test8
test("Backward --> face Direction is South", () => {
  expect(moveBackward([0,0,0], "S")).toStrictEqual([0, 1, 0]);
});

//Test9
test("Backward --> face Direction is East", () => {
  expect(moveBackward([0,0,0], "E")).toStrictEqual([-1, 0, 0]);
});

//Test10
test("Backward --> face Direction is West", () => {
  expect(moveBackward([0,0,0], "W")).toStrictEqual([1, 0, 0]);
});

//Test11
test("Backward --> face Direction is Up", () => {
  expect(moveBackward([0,0,0], "U")).toStrictEqual([0, 0, -1]);
});

//Test12
test("Backward --> face Direction is Down", () => {
  expect(moveBackward([0,0,0], "D")).toStrictEqual([0, 0, 1]);
});
