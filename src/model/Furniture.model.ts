import { Item, ItemCategory } from "./Item.model";

export class Furniture implements Item {

    private name: string;
    private price: number;
    private description: string;
    private dimensions: string;
    private material: string;
    private color: string;
    private category: string;
    private brand: string;

    constructor(
        name: string,
        price: number,
        description: string,
        dimensions: string,
        material: string,
        color: string,
        category: string,
        brand: string
    ) {
        this.name = name;
        this.price = price;
        this.description = description;
        this.dimensions = dimensions;
        this.material = material;
        this.color = color;
        this.category = category;
        this.brand = brand;
    }

    getName(): string{
        return this.name;
    }

    getPrice(){
        return this.price;
    }

    getDescription(): string{
        return this.description;
    }

    getDimensions(): string{
        return this.dimensions
    }

    getMaterial(): string{
        return this.material;
    }

    getColor(): string{
        return this.color;
    }
    getBrand(): string {
     return this.brand;
    }
    getCategory(): ItemCategory {
        return ItemCategory.FURNITURE;
    }
    
}