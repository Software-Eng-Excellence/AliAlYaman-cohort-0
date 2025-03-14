import { CakeBuilder } from "./model/builders/Cake.builder";




const main = async() => {
  const cakeBuilder = new CakeBuilder();
  cakeBuilder.setType("Sponge")
  cakeBuilder.setFlavor("Vanilla")
  cakeBuilder.setFilling("Cream")
  cakeBuilder.setSize(20)
  cakeBuilder.setLayers(2)
  cakeBuilder.setFrostingType("Buttercream")
  cakeBuilder.setFrostingFlavor("Vanilla")
  cakeBuilder.setDecorationType("Sprinkles")
  cakeBuilder.setDecorationColor("Multi-color")
  cakeBuilder.setCustomMessage("Happy Birthday")
  cakeBuilder.setShape("Round")
  cakeBuilder.setAllergies("Nut-Free")
  cakeBuilder.setSpecialIngredients("Organic Ingredients")
  cakeBuilder.setPackagingType("Standard Box")
  cakeBuilder.setPrice(50)
  cakeBuilder.setQuantity(1);
  const cake = cakeBuilder.build();
  
  console.log(cake);
}


main();