import {Component, OnInit} from "@angular/core";
import {FormAdd} from "../Models/formAdd";
import {GetRest} from "../get-from-rest/get-rest";
import {ActivatedRoute} from "@angular/router";




@Component({
  selector: 'put-component',
  templateUrl: 'put-component.html'
})


export class PutComponent implements OnInit{
  //constructor(public fb: FormAdd, private getRest: GetRest) {};
  constructor(private getRest: GetRest, private route: ActivatedRoute) {};

  productPut : any;
  formPut: any;
  storeId: string | null;

  productAdd : any;
  formAdd=this.fb.group({
    storeId:"",
    productName:"",
    cost: 0,
    productDate: 0
  });

  submitFormPut (){

  }

  ngOnInit(): void {
this.route.snapshot.paramMap.get("storeId");
console.log(this.route.snapshot.paramMap.get("storeId"))
    this.storeId = this.route.snapshot.paramMap.get("storeId");

  }

}
