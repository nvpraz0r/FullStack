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


class Customer{
    private _firstName: string;
    private lastName: string;
    
    get firstName(): string{
        return this._firstName;
    }

    set firstName(value: string){
        this._firstName = value;
    }
}

let myCustomer = new Customer();

myCustomer.firstName = "Prince";
console.log(myCustomer.firstName);