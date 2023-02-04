import {Component, OnInit} from "@angular/core";
import {FormAdd} from "../Models/formAdd";
import {GetRest} from "../get-from-rest/get-rest";




@Component({
  selector: 'put-component',
  templateUrl: 'put-component.html'
})


export class PutComponent implements OnInit{
  //constructor(public fb: FormAdd, private getRest: GetRest) {};
  constructor(private getRest: GetRest) {};

  productPut : any;
  formPut: any;
  submitFormPut (){
    // console.log("submitForm runned: " + JSON.stringify(this.fb.formAdd.value));
    // this.productPut = this.fb.formAdd.value
    // console.log("formData = " + JSON.stringify(this.productPut) + this.productPut)
    // this.getRest.putComponent(this.productPut).subscribe({
    //   next:(response) => console.log(response),
    //   error:(error) => console.log(error),
    // });
  }

  ngOnInit(): void {

  }

}
