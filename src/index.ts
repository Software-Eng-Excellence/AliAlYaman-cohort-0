//SOLID principles
//SRP - Single Responsibility Principle
//OCP - Open/Closed Principle
//LSP - Liskov Substitution Principle
//ISP - Interface Segregation Principle
//DIP - Dependency Inversion Principle

import {  AvgBuyPowerCalculator, FinanceCalculator, OrderManagement } from "./app-clean";


const newItem = "Marble";
const newPrice = 22;

let orderManagement = new OrderManagement();
let financeCalculator = new FinanceCalculator();
let avgBuyingCalculator = new AvgBuyPowerCalculator();
orderManagement.addOrder(newItem, newPrice);
OrderManagement.displayOrders();

const fetchId = 2;
const fetchedOrder = orderManagement.getOrderById(fetchId);
console.log("Order with ID 2:", fetchedOrder);

const nonExistentId = 10;
const nonExistentOrder = orderManagement.getOrderById(nonExistentId);
console.log("Order with ID 10 (non-existent):", nonExistentOrder);

financeCalculator.calculate(); 
avgBuyingCalculator.calculate();