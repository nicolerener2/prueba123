import City from "./city.ts";

class TripManager {
  #cities: City[];

  constructor() {
    this.#cities = [];
  }

  addCity(city: City): City {
    this.#cities.push(city);
    return city;
  }

  getAllCities(): City[] {
    return this.#cities.slice();
  }

  findCityByName(name: string): City | null {
    const filteredCities = this.#cities.filter((c) => c.getName() === name);
    if (filteredCities.length === 0) {
      return null;
    }
    return filteredCities[0];
  }
}

export default TripManager;
