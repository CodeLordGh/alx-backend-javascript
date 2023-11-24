// Import assert module
import assert from "assert";

// Import calculateNumber function
import calculateNumber from "./0-calcul.js";

describe("calculateNumber", function () {
  // Test for positive integers
  it("should return the sum of rounded integers", function () {
    assert(calculateNumber(1, 3), 4);
  });

  // Test for rounding up
  it("should round up decimals", function () {
    assert(calculateNumber(1, 3.7), 5);
  });

  // Test for rounding down
  it("should round down decimals", function () {
    assert(calculateNumber(1.2, 3.7), 5);
  });

  // Test for rounding to nearest integer
  it("should round to nearest integer", function () {
    assert(calculateNumber(1.5, 3.7), 6);
  });

  // ...add any other test cases you want...
});
