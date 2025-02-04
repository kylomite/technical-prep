import { expect } from "chai";
import twoSum from "../solutions/twoSum.js";
import reverseInteger from "../solutions/reverseInt.js";

describe("Two Sum Function", () => {
  it("should return the correct indices", () => {
    expect(twoSum([2, 7, 11, 15], 9)).to.deep.equal([0, 1]);
  });

  it("should return an empty array if no solution", () => {
    expect(twoSum([1, 2, 3], 7)).to.deep.equal([]);
  });
});

describe("Reverse Integer Function", () => {
  it("should return the inputs digits reversed", () => {
    expect(reverseInteger(123)).to.equal(321)
    expect(reverseInteger(-123)).to.equal(-321)
    expect(reverseInteger(120)).to.equal(21)
  });

  it("should return 0 if the reversal causes the value to fall outside the signed 32 bit integer range", () => {
    expect(reverseInteger(7463847412)).to.equal(0)
  })
});