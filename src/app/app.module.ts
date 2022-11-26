import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {GetComponent} from "./Components/store-list/get.component";
import {HttpClientModule} from "@angular/common/http";
import {AlertModule} from "ngx-bootstrap/alert";




@NgModule({
  declarations: [
    AppComponent,
    GetComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    AlertModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
