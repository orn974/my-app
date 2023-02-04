import {FormBuilder} from "@angular/forms";

export class FormAdd{
  constructor(public fb: FormBuilder) {

  }
  formAdd = this.fb.group(
{
  storeId:'',
  productName:'',
  cost:'',
  productDate:''
   }
 );
 }
