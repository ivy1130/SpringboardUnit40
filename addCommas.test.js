const addCommas = require("./addCommas");

describe("#addCommas", () => {
  test("it is a function", () => {
    expect(typeof addCommas).toBe("function");
  });

  test("1234 -> 1,234", () => {
    const res = addCommas(1234)
    expect(res).toEqual("1,234")
  })

  test("1000000 -> 1,000,000", () => {
    const res = addCommas(1000000)
    expect(res).toEqual("1,000,000")
  })

  test("9876543210 -> 9,876,543,210", () => {
    const res = addCommas(9876543210)
    expect(res).toEqual("9,876,543,210")
  })

  test("6 -> 6", () => {
    const res = addCommas(6)
    expect(res).toEqual("6")
  })

  test("-10 -> -10", () => {
    const res = addCommas(-10)
    expect(res).toEqual("-10")
  })

  test("-5678 -> -5,678", () => {
    const res = addCommas(-5678)
    expect(res).toEqual("-5,678")
  })
});
