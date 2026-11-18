import { describe, beforeEach, test, expect } from "vitest";
import TripManager from "../tripManager.ts";
import City from "../city.ts";

describe("TripManager", () => {
  let manager: TripManager;
  beforeEach(() => {
    manager = new TripManager();
  });

  test("get cities", () => {
    expect(manager.getAllCities()).toEqual([]);
  });

  test("find city by name", () => {
    const city = new City(
    "TestCity",
    "TestCountry",
    new Date("2023-05-01"),
    new Date("2023-05-04"),
    "Notas",
  );
    manager.addCity(city);

    expect(manager.findCityByName("TestCity")).toBe(city);
  });

  test("find city by name returns null if not found", () => {
    expect(manager.findCityByName("NonExistentCity")).toBeNull();
  });
});
