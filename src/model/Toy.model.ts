import { IItem, ItemCategory } from "./IItem";

export class Toy implements IItem {
  private name: string;
  private price: number;
  private description: string;
  private ageRange: string;
  private brand: string;
  private material: string;
  private color: string;

  constructor(
    name: string,
    price: number,
    description: string,
    ageRange: string,
    brand: string,
    material: string,
    color: string
  ) {
    this.name = name;
    this.price = price;
    this.description = description;
    this.ageRange = ageRange;
    this.brand = brand;
    this.material = material;
    this.color = color;
  }

  getName(): string {
    return this.name;
  }

  getPrice(): number {
    return this.price;
  }

  getDescription(): string {
    return this.description;
  }

  getAgeRange(): string {
    return this.ageRange;
  }

  getBrand(): string {
    return this.brand;
  }

  getMaterial(): string {
    return this.material;
  }

  getColor(): string {
    return this.color;
  }

  getCategory(): ItemCategory {
    return ItemCategory.TOY;
  }
}
