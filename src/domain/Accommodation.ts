class Accommodation {
  #accommmodationName!: string;
  #cost!: number;

  constructor(accommodationName: unknown, cost: unknown) {
    this.setAccommodationName(accommodationName);
    this.setCost(cost);
  }

  getCost(): number {
    return this.#cost;
  }

  setCost(cost: unknown): void {
    if (cost === null || cost === undefined || typeof cost !== "number") {
      throw new Error("El costo debe ser un numero valido");
    }
    if (!isFinite(cost)) {
      throw new Error("El costo debe ser un num valido");
    }
    if (cost < 0) {
      throw new Error("El costo debe ser mayor o igual a 0");
    }
    this.#cost = cost;
  }

  getNameAccommodaton(): string {
    return this.#accommmodationName;
  }

  setAccommodationName(accommodationName: unknown): void {
    if (
      typeof accommodationName !== "string" ||
      accommodationName.trim() === ""
    ) {
      throw new Error("El nombre debe ser una cadena no vacía");
    }
    this.#accommmodationName = accommodationName.trim();
  }
}
export default Accommodation;
