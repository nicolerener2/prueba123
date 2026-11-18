import { describe, beforeEach, test, expect } from "vitest";
import Accommodation from "../Accommodation.ts";

function createAccommodation(): Accommodation {
  return new Accommodation("TestAccommodation", 4);
}

describe("Accommodation name", () => {
  let accommodation: Accommodation;
  beforeEach(() => {
    accommodation = createAccommodation();
  });

  test("should get the correct name", () => {
    expect(accommodation.getName()).toBe("TestAccommodation");
  });

  test("should throw error if accommodation name is empty", () => {
    expect(() => accommodation.setName(" ")).toThrow();
  });

  test("should throw error if name is not a string", () => {
    expect(() => accommodation.setName(123)).toThrow();
  });
});

describe("Accommodation costs", () => {
  let accommodation: Accommodation;
  beforeEach(() => {
    accommodation = createAccommodation();
  });

  test("should get the correct cost", () => {
    expect(accommodation.getCost()).toBe(4);
  });

  test("should throw error if cost is invalid", () => {
    expect(() => accommodation.setCost("")).toThrow();
    expect(() => accommodation.setCost(null)).toThrow();
    expect(() => accommodation.setCost(-1)).toThrow();
    expect(() => accommodation.setCost(NaN)).toThrow(); //impo
  });

  test("should throw error if cost is not a number", () => {
    expect(() => accommodation.setCost("123")).toThrow();
  });

  test("should accept zero as a valid accommodation cost", () => {
    const freeAccommodation = new Accommodation("Hostel", 0);
    expect(freeAccommodation.getCost()).toBe(0);
  });
});
