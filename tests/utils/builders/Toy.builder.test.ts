import { ToyBuilder } from "../../../src/model/builders/Toy.builder";
import { Toy } from "../../../src/model/Toy.model";

describe("ToyBuilder", () => {
    it("should build a Toy object with all required fields", () => {
        const toy = new ToyBuilder()
            .setName("Toy Car")
            .setPrice(10)
            .setDescription("A small toy car")
            .setAgeRange("3-5")
            .setBrand("ToyBrand")
            .setMaterial("Plastic")
            .setColor("Red")
            .build();

        expect(toy).toBeInstanceOf(Toy);
        expect(toy).toEqual({
            name: "Toy Car",
            price: 10,
            description: "A small toy car",
            ageRange: "3-5",
            brand: "ToyBrand",
            material: "Plastic",
            color: "Red"
        });
    });

    it("should throw an error if a required field is missing", () => {
        expect(() => {
            new ToyBuilder()
                .setName("Toy Car")
                .setPrice(10)
                .build();
        }).toThrow("Missing required field");
    });
});