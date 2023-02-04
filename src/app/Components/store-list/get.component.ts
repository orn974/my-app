import {Component, OnInit} from "@angular/core";
import {GetRest} from "../get-from-rest/get-rest";
import {Product} from "../Models/product";
import {FormAdd} from "../Models/formAdd";
import {FormBuilder} from "@angular/forms";



@Component({
  selector: 'get-component',
  templateUrl: 'get.component.html'
})

export class GetComponent implements OnInit {
  productNumber: any;
  allObjects: any;

  constructor(public fb: FormBuilder, private getRest: GetRest) {

  }

  //@ts-ignore

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

  productAdd : any;
  formAdd=this.fb.group({
    storeId:"",
    productName:"",
    cost: 0,
    productDate: 0
  });
  submitForm (){
    console.log("submitForm runned: " + JSON.stringify(this.formAdd.value));
    // var formData: any = new FormData();
    //formData.append('product', JSON.stringify(this.formAdd.ts.value))
    //formData.append('product', JSON.stringify(this.formAdd.ts.get('product')))
    // formData.append('productName', this.formAdd.ts.get('productName'))
    // formData.append('cost', this.formAdd.ts.get('cost'))
    // formData.append('productDate', this.formAdd.ts.get('productDate'))

    this.productAdd = this.formAdd.value
    console.log("formData = " + JSON.stringify(this.productAdd) + this.productAdd)
    this.getRest.postComponent(this.productAdd).subscribe({
      next:(response) => console.log(response),
      error:(error) => console.log(error),
    });
  }

}
