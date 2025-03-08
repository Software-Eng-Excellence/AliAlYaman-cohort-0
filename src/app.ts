import logger from "./utils/logger";

interface IItems {
  possibleItems: string[];
  getItems(): string[];
}

interface IOrder {
  id: number;
  item: string;
  price: number;
}

interface IOrderRepository {
  getOrders(): IOrder[];
  getOrderById(id: number): IOrder | null;
  addOrder(item: string, price: number): void;
}

interface IValidator {
  validate(order: IOrder): void;
}

interface ICalculator {
  getTotalRevenue(orders: IOrder[]): number;
  getAvgBuyPower(orders: IOrder[]): number;
}

export class Items implements IItems {
  possibleItems: string[] = [
    "Sponge",
    "Chocolate",
    "Fruit",
    "Red Velvet",
    "Birthday",
    "Carrot",
    "Marble",
    "Coffee",
  ];

  getItems(): string[] {
    return this.possibleItems;
  }
}

// No need for this class
// export class Order implements IOrder {
//   constructor(public id: number, public item: string, public price: number) {
//     this.id = id;
//     this.item = item;
//     this.price = price;
//   }
// }

export class OrderManagement implements IOrderRepository {
  private orders: IOrder[] = [];
  constructor(private validator: IValidator, private calculator: ICalculator) {}

  getOrders(): IOrder[] {
    return this.orders;
  }
  getOrderById(id: number): IOrder | null {
    let order = this.orders.find((order) => order.id === id) || null;
    if(order === null) {
      logger.warn("Order with ID " + id + " not found");
    };
    return order;
  }
  addOrder(item: string, price: number): void {
    try {
      let order : IOrder = {id: this.orders.length + 1, item: item, price: price};
      this.validator.validate(order);
      this.orders.push(order);
      logger.debug("%o added successfully", order);
    } catch (error: any) {
      throw new Error("Order Management : Error adding order " + error.message);
    }
  }

  getRevenue(): number {
    return this.calculator.getTotalRevenue(this.orders);
  }

  
  getAvgBuyingPower(): number {
    return this.calculator.getAvgBuyPower(this.orders);
  }
}

export class PriceValidator implements IValidator {
  validate(order: IOrder): void {
    if (order.price < 0) {
      throw new Error("Price cannot be negative");
    }
  }
}
export class MaxValidator implements IValidator {
  validate(order: IOrder): void {
    if (order.price > 100) {
      throw new Error("Price cannot be above 100");
    }
  }
}

export class ItemValidator implements IValidator {
  validate(order: IOrder): void {
    let items = new Items();
    if (!items.getItems().includes(order.item)) {
      logger.error("Item has to be one of the following: ", items.getItems());
      throw new Error(
        "Item has to be one of the following: " + items.getItems().join(", ")
      );
    }
  }
}

export class Validator implements IValidator {
  constructor(
    private rules: IValidator[] = [
      new PriceValidator(),
      new MaxValidator(),
      new ItemValidator(),
    ]
  ) {}

  validate(order: IOrder): void {
    this.rules.forEach((rule) => rule.validate(order));
  }
}

export class FinanceCalculator implements ICalculator {
  getTotalRevenue(orders: IOrder[]): number {
    let result = orders.reduce((total, order) => total + order.price, 0);
    logger.info("Total price of all orders: ", result);
    return result;
  }

  getAvgBuyPower(orders: IOrder[]): number {
    let result =
      orders.length === 0
        ? 0
        : orders.reduce((acc, order) => acc + order.price, 0) / orders.length;

        logger.info("Total Average Buying Power orders: ", result);
    return Number(result.toFixed(2));
  }
}
