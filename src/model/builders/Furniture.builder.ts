import { Furniture } from "./../Furniture.model";
import logger from "../../utils/logger";

export class FurnitureBuilder {
  private name!: string;
  private price!: number;
  private description!: string;
  private dimensions!: string;
  private material!: string;
  private color!: string;
  private brand!: string;

  public setName(name: string): this {
    this.name = name;
    return this;
  }

  public setPrice(price: number): this {
    this.price = price;
    return this;
  }

  public setDescription(description: string): this {
    this.description = description;
    return this;
  }

  public setDimensions(dimensions: string): this {
    this.dimensions = dimensions;
    return this;
  }

  public setMaterial(material: string): this {
    this.material = material;
    return this;
  }

  public setColor(color: string): this {
    this.color = color;
    return this;
  }

  public setBrand(brand: string): this {
    this.brand = brand;
    return this;
  }

  build(): Furniture {
    const requiredProperties = [
      this.name,
      this.price,
      this.description,
      this.dimensions,
      this.material,
      this.color,
      this.brand,
    ];
    for (const property of requiredProperties) {
      if (!property) {
        logger.error("Missing field, could not build furniture");
        throw new Error("Missing required field");
      }
    }

    return new Furniture(
      this.name,
      this.price,
      this.description,
      this.dimensions,
      this.material,
      this.color,
      this.brand
    );
  }
}
