//SOLID principles
//SRP - Single Responsibility Principle
//OCP - Open/Closed Principle
//LSP - Liskov Substitution Principle
//ISP - Interface Segregation Principle
//DIP - Dependency Inversion Principle


import  config  from "./config";

const first_name = "Ali";
console.log(`Testing with ${first_name}, secret is ${config.secret}`);