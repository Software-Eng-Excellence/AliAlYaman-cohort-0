import { ClothingBuilder } from "../../../src/model/builders/Clothing.builder";
import { Clothing } from "../../../src/model/Clothing.model";

describe("ClothingBuilder", () => {
    it("should build a Clothing object with all properties set", () => {
        const clothing = new ClothingBuilder()
            .setName("T-Shirt")
            .setPrice(19.99)
            .setDescription("A comfortable cotton t-shirt")
            .setSize("M")
            .setColor("Blue")
            .setBrand("BrandName")
            .setMaterial("Cotton")
            .build();

        expect(clothing).toBeInstanceOf(Clothing);
        expect(clothing).toEqual({
            name: "T-Shirt",
            price: 19.99,
            description: "A comfortable cotton t-shirt",
            size: "M",
            color: "Blue",
            brand: "BrandName",
            material: "Cotton"
        });
    });

    it("should throw an error if a required field is missing", () => {
        expect(() => {
            new ClothingBuilder()
                .setName("T-Shirt")
                .setPrice(19.99)
                .build();
        }).toThrow("Missing required field");

       
    });

});