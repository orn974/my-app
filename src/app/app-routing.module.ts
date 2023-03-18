import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {GetComponent} from "./Components/store-list/get.component";
import {PutComponent} from "./Components/put/put-component";

const routes: Routes = [

  {path: '', component: GetComponent},
  {path: 'put-product/:storeId', component: PutComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
