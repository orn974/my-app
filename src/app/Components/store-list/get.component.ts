import {Component, OnInit} from "@angular/core";
import {GetRest} from "../get-from-rest/get-rest";
import {Product} from "../Models/product";


@Component({
  selector: 'get-component',
  templateUrl: 'get.component.html'
  })

export class GetComponent implements OnInit{
  productNumber: Product;
  allObjects: Product[];
constructor(private getRest:GetRest) {
}
ngOnInit(): void {
  //@ts-ignore
  this.getRest.getReqest().subscribe((data: Product) => {
    console.log(data);
    this.productNumber = data;
  })
  //@ts-ignore
  this.getRest.getAllReqest().subscribe((data: Product[]) => {
    this.allObjects = data;
  })
}
}
