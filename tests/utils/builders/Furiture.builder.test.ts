import { Furniture } from './../../../src/model/Furniture.model';
import { FurnitureBuilder } from "../../../src/model/builders/Furniture.builder";

describe("FurnitureBuilder", () => {
    it("should build a Furniture object with all required fields", () => {
        const furniture = new FurnitureBuilder()
            .setName("Chair")
            .setPrice(100)
            .setDescription("A comfortable chair")
            .setDimensions("40x40x90")
            .setMaterial("Wood")
            .setColor("Brown")
            .setBrand("IKEA")
            .build();

        expect(furniture).toBeInstanceOf(Furniture);
        expect(furniture).toEqual({
            name: "Chair",
            price: 100,
            description: "A comfortable chair",
            dimensions: "40x40x90",
            material: "Wood",
            color: "Brown",
            brand: "IKEA"
        });
    });

    it("should throw an error if a required field is missing", () => {
        expect(() => {
            new FurnitureBuilder()
                .setName("Chair")
                .setPrice(100)
                .build();
        }).toThrow("Missing required field");
    });

   
});