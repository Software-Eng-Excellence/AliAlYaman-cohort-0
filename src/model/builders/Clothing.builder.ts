import { Clothing } from "../Clothing.model";
import logger from "../../utils/logger";

export class ClothingBuilder {
    private name!: string;
    private price!: number;
    private description!: string;
    private size!: string;
    private color!: string;
    private brand!: string;
    private material!: string;
    
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
    
    public setSize(size: string): this {
        this.size = size;
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
    
    public setMaterial(material: string): this {
        this.material = material;
        return this;
    }

    build(): Clothing {

        const requiredProperties = [
            this.name,
            this.price,
            this.description,
            this.size,
             this.color,
            this.brand,
             this.material
        ];
        for (const property of requiredProperties) {
            if (!property){
                logger.error("Missing field, could not build cake");
                throw new Error("Missing required field");
            }
        }

        return new Clothing(this.name, this.price, this.description, this.size, this.color, this.brand, this.material);
    }
    
}