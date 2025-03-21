import { Item, ItemCategory } from "./Item.model";


export class Toy implements Item {


    private name: string;
    private price: number;
    private description: string;
    private age_range: string;
    private brand: string;
    private material: string;
    private color: string;

    constructor(
        name: string,
        price: number,
        description: string,
        age_range: string,
        brand: string,
        material: string,
        color: string,
    ) {
        this.name = name;
        this.price = price;
        this.description = description;
        this.age_range = age_range;
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
        return this.age_range;
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