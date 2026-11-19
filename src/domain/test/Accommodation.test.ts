import { describe, beforeEach, test, expect } from "vitest";
import Accommodation from "../Accommodation.ts";

function createAccommodation(): Accommodation {
  return new Accommodation("TestAccommodation", 100);
}

describe("Accommodation name", () => {
  let accommodation: Accommodation;
  beforeEach(() => {
    accommodation = createAccommodation();
  });

  test("should get the correct name", () => {
    expect(accommodation.getNameAccommodaton()).toBe("TestAccommodation");
  });

  test("should throw error if accommodation name is empty", () => {
    expect(() => accommodation.setAccommodationName(" ")).toThrow();
  });
});

describe("Accommodation cost", () => {
  let accommodation: Accommodation;
  beforeEach(() => {
    accommodation = createAccommodation();
  });

  test("should get the correct cost", () => {
    expect(accommodation.getCost()).toBe(100);
  });

  test("should get the correct cost", () => {
    accommodation.setCost(0);
    expect(accommodation.getCost()).toBe(0);
  });

  test("should throw error if cost is invalid", () => {
    expect(() => accommodation.setCost(-1)).toThrow();
  });

  test("should throw error if cost is invalid", () => {
    expect(() => accommodation.setCost("")).toThrow();
  });
  test("should throw error if cost is invalid", () => {
    expect(() => accommodation.setCost(null)).toThrow();
  });
  test("should throw error if cost is invalid", () => {
    expect(() => accommodation.setCost("abc")).toThrow();
  });
  test("should throw error if cost is invalid", () => {
    expect(() => accommodation.setCost(NaN)).toThrow();
  });
});
