import { Pet } from './../Pet.model';
import logger from "../../utils/logger";

export class PetBuilder {
    private name!: string;
    private price!: number;
    private description!: string;
    private species!: string;
    private breed!: string;
    private age!: number;
    private gender!: string;
    private color!: string;
    private healthStatus!: string;


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
        const requiredProperties = [
            this.name,
            this.price,
            this.description,
            this.species,
            this.breed,
            this.age,
            this.gender,
            this.color,
            this.healthStatus
        ];
        for (const property of requiredProperties) {
            if (!property) {
                logger.error("Missing field, could not build pet");
                throw new Error("Missing required field");
            }
        }

        return new Pet(this.name, this.price, this.description, this.species, this.breed, this.age, this.gender, this.color, this.healthStatus);
    }
}