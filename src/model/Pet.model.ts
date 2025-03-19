import { Item, ItemCategory } from "./Item.model";

export class Pet implements Item {
    private id: string;
    private name: string;
    private price: number;
    private description: string;
    private species: string;
    private breed: string;
    private age: number;
    private gender: string;
    private color: string;
    private healthStatus: string;

    constructor(
        id: string,
        name: string,
        price: number,
        description: string,
        species: string,
        breed: string,
        age: number,
        gender: string,
        color: string,
        healthStatus: string
    ) {
        this.id = id;
        this.name = name;
        this.price = price;
        this.description = description;
        this.species = species;
        this.breed = breed;
        this.age = age;
        this.gender = gender;
        this.color = color;
        this.healthStatus = healthStatus;
    }

    getId(): string {
        return this.id;
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

    getSpecies(): string {
        return this.species;
    }

    getBreed(): string {
        return this.breed;
    }

    getAge(): number {
        return this.age;
    }

    getGender(): string {
        return this.gender;
    }

    getColor(): string {
        return this.color;
    }

    getHealthStatus(): string {
        return this.healthStatus;
    }



    getCategory(): ItemCategory {
        return ItemCategory.PET;
    }
    
}