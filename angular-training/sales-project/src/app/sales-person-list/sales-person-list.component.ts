import { Component, OnInit } from '@angular/core';
import { SalesPerson } from './sales-person';

@Component({
  selector: 'app-sales-person-list',
  templateUrl: './sales-person-list.component.html',
  styleUrls: ['./sales-person-list.component.css']
})
export class SalesPersonListComponent implements OnInit {

  //create an array
  salesPersonList: SalesPerson[] = [
    new SalesPerson("Abc5", "Xyz5", "this_is_an5@email.com", 500),
    new SalesPerson("Abc6", "Xyz6", "this_is_an6@email.com", 600),
    new SalesPerson("Abc7", "Xyz7", "this_is_an7@email.com", 700),
    new SalesPerson("Abc8", "Xyz8", "this_is_an8@email.com", 800),
    new SalesPerson("Abc9", "Xyz9", "this_is_an9@email.com", 900),
    new SalesPerson("Abc10", "Xyz10", "this_is_an10@email.com", 1000)
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
