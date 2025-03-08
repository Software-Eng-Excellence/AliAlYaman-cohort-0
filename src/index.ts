//SOLID principles
//SRP - Single Responsibility Principle
//OCP - Open/Closed Principle
//LSP - Liskov Substitution Principle
//ISP - Interface Segregation Principle
//DIP - Dependency Inversion Principle

import { FinanceCalculator, OrderManagement, Validator } from "./app-clean";




let orderManagement = new OrderManagement(
    new Validator(),
    new FinanceCalculator()
  );

const orders  = [
    { id: 1, item: "Sponge", price: 15 },
    { id: 2, item: "Chocolate", price: 20 },
    { id: 3, item: "Fruit", price: 18 },
    { id: 4, item: "Red Velvet", price: 25 },
    { id: 5, item: "Coffee", price: 8 },
  ];


orders.forEach((order) => orderManagement.addOrder(order.item, order.price));

const newItem = "Marble";
const newPrice = 22;


orderManagement.addOrder(newItem, newPrice);


console.log("All orders:" , orderManagement.getOrders());


const fetchId = 2;
const fetchedOrder = orderManagement.getOrderById(fetchId);
console.log("Order with ID 2:", fetchedOrder);

const nonExistentId = 10;
const nonExistentOrder = orderManagement.getOrderById(nonExistentId);
console.log("Order with ID 10 (non-existent):", nonExistentOrder);

const totalRevenue = orderManagement.getRevenue();
const avgBuyPower = orderManagement.getAvgBuyingPower();

console.log("Total revenue:", totalRevenue);
console.log("Average buying power:", avgBuyPower);
