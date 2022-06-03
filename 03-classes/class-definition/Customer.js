// class Customer{
//     firstName: string;
//     lastName: string;
//     constructor(theFirst: string, theLast: string){
//         this.firstName = theFirst;
//         this.lastName = theLast;
//     }
// }
// let myCustomer = new Customer("Daddy", "Longlegs");
// console.log(myCustomer.firstName);
// console.log(myCustomer.lastName);
var Customer = /** @class */ (function () {
    function Customer() {
    }
    Object.defineProperty(Customer.prototype, "firstName", {
        get: function () {
            return this._firstName;
        },
        set: function (value) {
            this._firstName = value;
        },
        enumerable: false,
        configurable: true
    });
    return Customer;
}());
var myCustomer = new Customer();
myCustomer.firstName = "Prince";
console.log(myCustomer.firstName);
