import { AvgBuyPowerCalculator, FinanceCalculator } from "./../src/app";
// 3A: Arrange, Act, Assert

import { OrderManagement } from "./../src/app";

describe("OrderManagement", () => {
  it("should add an order", () => {
    // Arrange
    const orderManagement = new OrderManagement();
    const item = "Sponge";
    const price = 15;

    //Act
    orderManagement.addOrder(item, price);

    //Assert
    expect(orderManagement.getOrderById(6)).toEqual({ id: 6, item, price });
  });

  it("should return an order by id", () => {
    // Arrange
    const orderManagement = new OrderManagement();
    const item = "Coffee";
    const price = 35;
    orderManagement.addOrder(item, price);

    //Act
    const order = orderManagement.getOrderById(7);

    //Assert
    expect(order).toEqual({ id: 7, item, price });
  });

  it("should return all orders", () => {
    const orderManagement = new OrderManagement();
    const orders = orderManagement.getOrders();
    expect(orders.length).toBe(7);
  });
});

describe("FinanceCalculator", () => {
  it("should calculate the total price of all orders", () => {
    const financeCalculator = new FinanceCalculator();
    const totalPrice = financeCalculator.calculate();
    expect(totalPrice).toBe(136);
  });

  it("should calculate the average buying power", () => {
    const financeCalculator = new AvgBuyPowerCalculator();
    const avgBuyingPower = financeCalculator.calculate();
    expect(avgBuyingPower).toBe(19.43);
  });
});
