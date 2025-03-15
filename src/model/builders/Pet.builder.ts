import { Pet } from './../Pet.model';
import logger from "../../utils/logger";

export class PetBuilder {
    private id!: string;
    private name!: string;
    private price!: number;
    private description!: string;
    private species!: string;
    private breed!: string;
    private age!: number;
    private gender!: string;
    private color!: string;
    private healthStatus!: string;
    
    public setId(id: string): this {
        this.id = id;
        return this;
    }

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
    
    public setSpecies(species: string): this {
        this.species = species;
        return this;
    }
    
    public setBreed(breed: string): this {
        this.breed = breed;
        return this;
    }
    
    public setAge(age: number): this {
        this.age = age;
        return this;
    }
    
    public setGender(gender: string): this {
        this.gender = gender;
        return this;
    }
    
    public setColor(color: string): this {
        this.color = color;
        return this;
    }
    
    public setHealthStatus(healthStatus: string): this {
        this.healthStatus = healthStatus;
        return this;
    }

    build(): Pet {
        const requiredProperties = {
            id: this.id,
            name: this.name,
            price: this.price,
            description: this.description,
            species: this.species,
            breed: this.breed,
            age: this.age,
            gender: this.gender,
            color: this.color,
            healthStatus: this.healthStatus
        };
        for (const property in requiredProperties) {
            if (!requiredProperties[property as keyof typeof requiredProperties]) {
                logger.error("Missing field, could not build pet");
                throw new Error("Missing required field");
            }
        }

        return new Pet(this.id, this.name, this.price, this.description, this.species, this.breed, this.age, this.gender, this.color, this.healthStatus);
    }
}