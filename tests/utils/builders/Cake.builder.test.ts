import { CakeBuilder } from './../../../src/model/builders/Cake.builder';

describe("CakeBuilder", () => {
    let cakeBuilder: CakeBuilder;

    beforeEach(() => {
        cakeBuilder = new CakeBuilder()
            .setType("Sponge")
            .setFlavor("Vanilla")
            .setFilling("Cream")
            .setSize(20)
            .setLayers(2)
            .setFrostingType("Buttercream")
            .setFrostingFlavor("Vanilla")
            .setDecorationType("Sprinkles")
            .setDecorationColor("Multi-color")
            .setCustomMessage("Happy Birthday")
            .setShape("Round")
            .setAllergies("Nut-Free")
            .setSpecialIngredients("Organic Ingredients")
            .setPackagingType("Standard Box")
            .setPrice(50)
            .setQuantity(1);
    });

    it("should build a cake if all properties are provided", () => {
        let result = cakeBuilder.build();

        expect(result).toEqual({
            type: "Sponge",
            flavor: "Vanilla",
            filling: "Cream",
            size: 20,
            layers: 2,
            frostingType: "Buttercream",
            frostingFlavor: "Vanilla",
            decorationType: "Sprinkles",
            decorationColor: "Multi-color",
            customMessage: "Happy Birthday",
            shape: "Round",
            allergies: "Nut-Free",
            specialIngredients: "Organic Ingredients",
            packagingType: "Standard Box",
            price: 50,
            quantity: 1
        });
    })


    it("should throw an error for missing field", () => {
        expect(() => new CakeBuilder().setType("Birthday").build()).toThrow("Missing required properties");
    });

});