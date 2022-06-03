import {Customer} from "./Customer";

let myCustomer = new Customer("Foo", "Bar");

console.log(myCustomer.firstName);
console.log(myCustomer.lastName);

console.log(`${myCustomer.firstName} ${myCustomer.lastName}`);