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
  calculate(): void;
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

export class Order implements IOrder {
  constructor(public id: number, public item: string, public price: number) {
    this.id = id;
    this.item = item;
    this.price = price;
  }
}

export class OrderManagement implements IOrderRepository {
  private  static idCounter = 1;
  private  static orders: IOrder[] = [
    { id: this.idCounter++, item: "Sponge", price: 15 },
    { id: this.idCounter++, item: "Chocolate", price: 20 },
    { id: this.idCounter++, item: "Fruit", price: 18 },
    { id: this.idCounter++, item: "Red Velvet", price: 25 },
    { id: this.idCounter++, item: "Coffee", price: 8 },
  ];


  getOrders(): IOrder[] {
    return OrderManagement.orders;
  }
  getOrderById(id: number): IOrder | null {
    let order = OrderManagement.orders.find((order) => order.id === id) || null;

    return order;
  }
  addOrder(item: string, price: number): void {
    let validator = new Validator();
    let order = new Order(OrderManagement.idCounter++, item, price);
    validator.validate(order);
    OrderManagement.orders.push(order);
  }

  public static displayOrders(): void {
    console.log(
      OrderManagement.orders
        .map(
          (order) =>
            `ID: ${order.id}, Item: ${order.item}, Price: ${order.price}`
        )
        .join("\n")
    );
  }

  public static getIdCounter(): number {
    return this.idCounter;
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
  constructor(private rules: IValidator[]= [
    new PriceValidator(),
    new MaxValidator(),
    new ItemValidator(),]) {}

  validate(order: Order): void {
    this.rules.forEach((rule) => rule.validate(order));
  }
}

export class FinanceCalculator implements ICalculator {
  calculate(): void {
    let orders = new OrderManagement().getOrders();
    let result = orders.reduce((total, order) => total + order.price, 0);
    console.log("Total price of all orders: ", result);
  }
}

export class AvgBuyPowerCalculator implements ICalculator {
  calculate(): void {
    let orders = new OrderManagement().getOrders();
    let result =
      orders.length === 0
        ? 0
        : orders.reduce((acc, order) => acc + order.price, 0) / orders.length;

    console.log("Total Average Buying Power: ", result);
  }
}
