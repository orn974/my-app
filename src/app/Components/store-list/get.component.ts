import {Component, OnInit} from "@angular/core";
import {GetRest} from "../get-from-rest/get-rest";
import {Product} from "../Models/product";
import {FormBuilder, FormGroup, FormControl} from "@angular/forms";


@Component({
  selector: 'get-component',
  templateUrl: 'get.component.html'
})

export class GetComponent implements OnInit {
  productNumber: Product;
  allObjects: Product[];

  //formAdd: FormGroup;
  constructor(public fb: FormBuilder, private getRest: GetRest) {

  }
  formAdd = this.fb.group({
    productName:[''],
    cost:[''],
    productDate:['']
  });

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


  submitForm (){
    console.log("submitForm runned: " + JSON.stringify(this.formAdd.value) + this.formAdd);
    var formData: any = new FormData();
    formData.append('productName', this.formAdd.get('productName'))
    formData.append('cost', this.formAdd.get('cost'))
    formData.append('productDate', this.formAdd.get('productDate'))
    console.log(JSON.stringify(formData))
    this.getRest.postComponent(formData).subscribe({
      next:(response) => console.log(response),
      error:(error) => console.log(error),
    });
  }
}
