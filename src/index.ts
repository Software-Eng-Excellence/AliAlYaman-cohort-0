import { CakeBuilder } from "./model/builders/Cake.builder";




const main = async() => {
  const cakeBuilder = new CakeBuilder();
  cakeBuilder.setType("Sponge")
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
  const cake = cakeBuilder.build();
  
  console.log(cake);
}


main();