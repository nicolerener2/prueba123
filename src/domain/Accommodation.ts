class Accommodation {
  #name!: string;
  #cost!: number;

  constructor(name: unknown, cost: unknown) {
    this.setName(name);
    this.setCost(cost);
  }

  getName(): string {
    return this.#name;
  }

  setName(name: unknown): void {
    if (typeof name !== "string" || name.trim() === "") {
      throw new Error("El nombre debe ser una cadena no vacía");
    }
    this.#name = name.trim();
  }

  getCost(): number {
    return this.#cost;
  }

  setCost(cost: unknown): void {
    if (typeof cost !== "number") {
      throw new Error("El cost debe ser una numero");
    }
    if (!Number.isFinite(cost)) {
      throw new Error("Cost is required");
    }
    if (cost < 0) {
      throw new Error("Cost must be 0 or bigger");
    }
    this.#cost = cost;
  }
}
export default Accommodation;
