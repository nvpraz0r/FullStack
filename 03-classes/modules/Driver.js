"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Customer_1 = require("./Customer");
var myCustomer = new Customer_1.Customer("Foo", "Bar");
console.log(myCustomer.firstName);
console.log(myCustomer.lastName);
console.log("".concat(myCustomer.firstName, " ").concat(myCustomer.lastName));
