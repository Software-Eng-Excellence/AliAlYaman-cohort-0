import { Item, ItemCategory } from "./Item.model";

export class Clothing implements Item {
    private name: string;
    private price: number;
    private description: string;
    private size: string;
    private color: string;
    private brand: string;
    private material: string;

    constructor(
        name: string,
        price: number,
        description: string,
        size: string,
        color: string,
        brand: string,
        material: string,
    ) {
        this.name = name;
        this.price = price;
        this.description = description;
        this.size = size;
        this.color = color;
        this.brand = brand;
        this.material = material;
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

    getSize(): string {
        return this.size;
    }

    getColor(): string {
        return this.color;
    }

    getBrand(): string {
        return this.brand;
    }

    getMaterial(): string {
        return this.material;
    }

    getCategory(): ItemCategory {
        return ItemCategory.CLOTHING;
    }

}