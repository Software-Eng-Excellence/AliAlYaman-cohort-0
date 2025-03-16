import logger from "../../utils/logger";
import { Toy } from "../Toy.model";

export class ToyBuilder {
    private name!: string;
    private price!: number;
    private description!: string;
    private ageRange!: string;
    private brand!: string;
    private material!: string;
    private color!: string;

    public setName(name: string): ToyBuilder {
        this.name = name;
        return this;
    }

    public setPrice(price: number): ToyBuilder {
        this.price = price;
        return this;
    }

    public setDescription(description: string): ToyBuilder {
        this.description = description;
        return this;
    }

    public setAgeRange(ageRange: string): ToyBuilder {
        this.ageRange = ageRange;
        return this;
    }

    public setBrand(brand: string): ToyBuilder {
        this.brand = brand;
        return this;
    }

    public setMaterial(material: string): ToyBuilder {
        this.material = material;
        return this;
    }

    public setColor(color: string): ToyBuilder {
        this.color = color;
        return this;
    }

    public build(): Toy {
        const requiredProperties = [
            this.name,
            this.price,
            this.description,
            this.ageRange,
            this.brand,
            this.material,
            this.color
        ];

        for (const property of requiredProperties) {
            if (!property){
                logger.error("Missing field, could not build cake");
                throw new Error("Missing required field");
            }
        }

        return new Toy(
            this.name,
            this.price,
            this.description,
            this.ageRange,
            this.brand,
            this.material,
            this.color
        );
    }



}