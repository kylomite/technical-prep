import { expect } from "chai";
import twoSum from "../solutions/twoSum.js";

describe("Two Sum Function", () => {
  it("should return the correct indices", () => {
    expect(twoSum([2, 7, 11, 15], 9)).to.deep.equal([0, 1]);
  });

  it("should return an empty array if no solution", () => {
    expect(twoSum([1, 2, 3], 7)).to.deep.equal([]);
  });
});