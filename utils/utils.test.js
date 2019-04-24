const expect = require("expect");
const utils = require("./utils");

describe("utils", () => {
  it("should add 2 numbers", () => {
    let res = utils.add(3, 5);
    expect(res)
      .toBe(8)
      .toBeA("number");
  });

  it("should async add 2 numbers", done => {
    utils.asyncAdd(3, 5, sum => {
      expect(sum)
        .toBe(8)
        .toBeA("number");
      done();
    });
  });

  it("should square a number", () => {
    let res = utils.square(3);
    expect(res)
      .toBe(9)
      .toBeA("number");
  });

  it("should give us the first name and last name", () => {
    let obj = utils.setName({}, "Himanshu Kumar Mishra");
    expect(obj).toInclude({ firstName: "Himanshu", lastName: "Mishra" });
  });
});
