import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {GetComponent} from "./Components/store-list/get.component";
import {HttpClientModule} from "@angular/common/http";
import {AlertModule} from "ngx-bootstrap/alert";
import {ReactiveFormsModule} from "@angular/forms";
import {PutComponent} from "./Components/put/put-component";




@NgModule({
  declarations: [
    AppComponent,
    GetComponent,
    PutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    AlertModule.forRoot(),
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
