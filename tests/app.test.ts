import { AvgBuyPowerCalculator, FinanceCalculator } from "./../src/app";
// 3A: Arrange, Act, Assert

import { OrderManagement } from "./../src/app";

let orderManagement: OrderManagement;
let item: string;
let price: number;
let totalRevenueCalculator: FinanceCalculator;
let avgBuyPowerCalculator: AvgBuyPowerCalculator;

beforeAll(() => {
  orderManagement = new OrderManagement();
  item = "Sponge";
  price = 15;
  totalRevenueCalculator = new FinanceCalculator();
  avgBuyPowerCalculator = new AvgBuyPowerCalculator();
});

describe("OrderManagement", () => {
  it("should add an order", () => {
    //Act
    orderManagement.addOrder(item, price);

    //Assert
    expect(orderManagement.getOrderById(6)).toEqual({ id: 6, item, price });
  });

  it("should return an order by id", () => {
    // Arrange
    item = "Coffee";
    price = 35;

    orderManagement.addOrder(item, price);

    //Act
    const order = orderManagement.getOrderById(7);

    //Assert
    expect(order).toEqual({ id: 7, item, price });
  });

  it("should return all orders", () => {
    const orders = orderManagement.getOrders();
    expect(orders.length).toBe(7);
  });

  it("should call add order", () => {
    const item = "Marble";
    const price = 22;
    const addOrderSpy = jest.spyOn(orderManagement, "addOrder");
    orderManagement.addOrder(item, price);
    expect(addOrderSpy).toHaveBeenCalled();
    expect(addOrderSpy).toHaveBeenCalledWith(item, price);
  });
});

describe("FinanceCalculator", () => {
  it("should calculate the total price of all orders", () => {
    const totalPrice = totalRevenueCalculator.calculate();
    expect(totalPrice).toBe(158);
  });

  it("should calculate the average buying power", () => {
    const avgBuyingPower = avgBuyPowerCalculator.calculate();
    expect(avgBuyingPower).toBeCloseTo(19.75, 1);
  });
});
