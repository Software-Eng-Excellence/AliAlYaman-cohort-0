import { Order } from "../Order.model";
import logger from "../../utils/logs/logger";
import { IItem } from "../IItem";

export class OrderBuilder  {
    private item!: IItem;
    private price!: number;
    private quantity!: number;
    private id!: string;

  

    setItem(item: IItem): OrderBuilder {
        this.item = item;
        return this;
    }

    setPrice(price: number): OrderBuilder {
        this.price = price;
        return this;
    }

    setQuantity(quantity: number): OrderBuilder {
        this.quantity = quantity;
        return this;
    }

    setId(id: string): OrderBuilder {
        this.id = id;
        return this;
    }

    build(): Order {
        const requiredProperties = [
            this.id,
            this.item,
            this.quantity,
            this.price,
          ];
          for (const property of requiredProperties) {
            if (!property) {
              logger.error("Missing field, could not build furniture");
              throw new Error("Missing required field");
            }
          }
        return new Order(this.item, this.price, this.quantity, this.id);
    }
}