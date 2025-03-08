import { c } from "vite/dist/node/types.d-aGj9QkWt";

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
  private orders: IOrder[] = [
    { id: 1, item: "Sponge", price: 15 },
    { id: 2, item: "Chocolate", price: 20 },
    { id: 3, item: "Fruit", price: 18 },
    { id: 4, item: "Red Velvet", price: 25 },
    { id: 5, item: "Coffee", price: 8 },
  ];;
  constructor(private validator: IValidator, private calculator: ICalculator) {}

  getOrders(): IOrder[] {
    return this.orders;
  }
  getOrderById(id: number): IOrder | null {
    let order = this.orders.find((order) => order.id === id) || null;

    return order;
  }
  addOrder(item: string, price: number): void {
    let order : IOrder = {id: this.orders.length +1, item, price};
    this.validator.validate(order);
    this.orders.push(order);
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
    return result;
  }

  getAvgBuyPower(orders: IOrder[]): number {
    let result =
      orders.length === 0
        ? 0
        : orders.reduce((acc, order) => acc + order.price, 0) / orders.length;

    return result;
  }
}
